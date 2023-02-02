import {
    Arg,
    Ctx,
    Field,
    FieldResolver,
    Int,
    Mutation,
    ObjectType,
    Query,
    Resolver,
    Root,
    UseMiddleware
} from "type-graphql";
import {Employer} from "../entities/internal/employer/Employer";
import {isAuth} from "../middleware/isAuth";
import {getConnection} from "typeorm";
import {EmployerInput} from "./Inputs/EmployerInput";
import {validateRegisterEmployer} from "../utils/validateRegisterEmployer";
import argon2 from "argon2";
import {FieldError} from "./fieldError";
import {MyContext} from "../types/types";
import {COOKIE_NAME, FORGET_PASSWORD_PREFIX} from "../constants";
import {v4} from "uuid";
import {sendEmail} from "../utils/sendEmail";

@ObjectType()
class PaginatedEmployers {
    @Field(() => [Employer])
    employers: Employer[];
    @Field()
    hasMore: boolean;
}

@ObjectType()
class EmployerResponse {
    @Field(() => [FieldError], {nullable: true})
    errors?: FieldError[];

    @Field(() => Employer, {nullable: true})
    employer?: Employer;
}


@Resolver(Employer)
export class EmployerResolver {
    @FieldResolver(() => String)
    emailEmployer(@Root() employer: Employer, @Ctx() {req}: MyContext) {
        if (req.session.employerId === employer.id) {
            return employer.email;
        }

        return "";
    }

    @Mutation(() => EmployerResponse)
    async changePassword(
        @Arg("token") token: string,
        @Arg("newPassword") newPassword: string,
        @Ctx() {redis, req}: MyContext
    ): Promise<EmployerResponse> {
        if (newPassword.length <= 2) {
            return {
                errors: [
                    {
                        field: "newPassword",
                        message: "length must be greater than 2",
                    },
                ],
            };
        }

        const key = FORGET_PASSWORD_PREFIX + token;
        const employerId = await redis.get(key);
        if (!employerId) {
            return {
                errors: [
                    {
                        field: "token",
                        message: "token expired",
                    },
                ],
            };
        }

        const employerIdNum = parseInt(employerId);
        const employer = await Employer.findOne(employerIdNum);

        if (!employer) {
            return {
                errors: [
                    {
                        field: "token",
                        message: "Employer no longer exists",
                    },
                ],
            };
        }

        await Employer.update(
            {id: employerIdNum},
            {
                password: await argon2.hash(newPassword),
            }
        );

        await redis.del(key);

        // log in user after change password
        req.session.employerId = employer.id;

        return {employer};
    }

    @Mutation(() => Boolean)
    async forgotPassword(
        @Arg("email") email: string,
        @Ctx() {redis}: MyContext
    ) {
        const employer = await Employer.findOne({where: {email}});
        if (!employer) {
            // the email is not in the db
            return true;
        }

        const token = v4();

        await redis.set(
            FORGET_PASSWORD_PREFIX + token,
            employer.id,
            "ex",
            1000 * 60 * 60 * 24 * 3
        ); // 3 days

        await sendEmail(
            email,
            `<a href="http://localhost:3000/change-password/${token}">reset password</a>`
        );

        return true;
    }

    @Query(() => Employer, {nullable: true})
    meEmployer(@Ctx() {req}: MyContext) {
        // you are not logged in
        if (!req.session.employerId) {
            return null;
        }

        return Employer.findOne(req.session.employerId);
    }

    @Query(() => PaginatedEmployers)
    async employers(
        @Arg("limit", () => Int) limit: number,
        @Arg("cursor", () => String, {nullable: true}) cursor: string | null
    ): Promise<PaginatedEmployers> {
        const realLimit = Math.min(50, limit);
        const realLimitPlusOne = realLimit + 1;

        const replacements: any[] = [realLimitPlusOne];

        if (cursor) {
            replacements.push(new Date(parseInt(cursor)));
        }

        const employers = await getConnection().query(
            `
    select e.*
    from employer e
    ${cursor ? `where e."createdAt" < $2` : ""}
    order by e."createdAt" DESC
    limit $1
    `,
            replacements
        );

        return {
            employers: employers.slice(0, realLimit),
            hasMore: employers.length === realLimitPlusOne,
        };
    }

    @Query(() => [Employer])
    async employersList(): Promise<Employer[]> {
        return Employer.find();
    }

    @Query(() => Employer, {nullable: true})
    employer(@Arg("id") id: number): Promise<Employer | undefined> {
        return Employer.findOne(id)
    }

    @Mutation(() => EmployerResponse)
    @UseMiddleware(isAuth)
    async createEmployer(
        @Arg("options") options: EmployerInput,
    ): Promise<EmployerResponse> {
        const errors = validateRegisterEmployer(options);
        if (errors) {
            return {errors};
        }
        const hashedPassword = await argon2.hash(options.password);
        let employer;
        try {
            const result = await getConnection()
                .createQueryBuilder()
                .insert()
                .into(Employer)
                .values({
                    firstname: options.firstname,
                    lastname: options.lastname,
                    cardDescription: options.cardDescription,
                    description: options.description,
                    position: options.position,
                    email: options.email,
                    phone: options.phone,
                    password: hashedPassword,
                    avatar: options.avatar,
                    city: options.city,
                    averageTime: options.averageTime,
                })
                .returning("*")
                .execute();
            console.log(result)
            employer = result.raw[0];
        } catch (err) {
            if (err.code === "23505") {
                return {
                    errors: [
                        {
                            field: "email",
                            message: "email already taken",
                        },
                    ],
                };
            }
        }
        return {employer};
    }

    @Mutation(() => EmployerResponse)
    async loginEmployer(
        @Arg("phoneOrEmail") phoneOrEmail: string,
        @Arg("password") password: string,
        @Ctx() {req}: MyContext
    ): Promise<EmployerResponse> {
        const employer = await Employer.findOne(
            phoneOrEmail.includes("@")
                ? {where: {email: phoneOrEmail}}
                : {where: {phone: phoneOrEmail}}
        );
        if (!employer) {
            return {
                errors: [
                    {
                        field: "phoneOrEmail",
                        message: "Сотрудника с такими данными не существует в системе"
                    },
                ],
            }
        }

        const valid = await argon2.verify(employer.password, password);
        if (!valid) {
            return {
                errors: [
                    {
                        field: "password",
                        message: "Неверный пароль"
                    },
                ],
            }
        }

        req.session.employerId = employer.id;

        return {
            employer,
        }

    }

    @Mutation(() => Employer, {nullable: true})
    @UseMiddleware(isAuth)
    async updateEmployer(
        @Arg("id") id: number,
        @Arg("input", () => String, {nullable: true}) input: EmployerInput,
    ): Promise<Employer | null> {
        const employer = await Employer.findOne(id)
        if (!employer) {
            return null;
        }
        if (typeof input !== "undefined") {
            // @ts-ignore
            await Employer.update({id}, ...input)
        }

        return employer;
    }

    @Mutation(() => Boolean)
    @UseMiddleware(isAuth)
    async deleteEmployer(
        @Arg("id", () => Int) id: number,
    ): Promise<boolean> {
        await Employer.delete({id});
        return true;
    }

    @Mutation(() => Boolean)
    logoutEmployer(@Ctx() {req, res}: MyContext) {
        return new Promise((resolve) =>
            req.session.employerId.destroy((err: any) => {
                res.clearCookie(COOKIE_NAME);
                if (err) {
                    console.log(err);
                    resolve(false);
                    return;
                }

                resolve(true);
            })
        );
    }
}
