import {Arg, Field, Mutation, ObjectType, Query, Resolver, UseMiddleware} from "type-graphql";
import {isAuth} from "../middleware/isAuth";
import {FieldError} from "./fieldError";
import {getConnection} from "typeorm";
import {AdvantagesEmployer} from "../entities/AdvantagesEmployer";
import {AdvantagesEmployerInput} from "./Inputs/AdvantagesEmployerInput";
import {validateAdvantagesEmployer} from "../utils/validateAdvanatagesEmployer";

@ObjectType()
class AdvantagesEmployerResponse {
    @Field(() => [FieldError], {nullable: true})
    errors?: FieldError[];

    @Field(() => AdvantagesEmployer, {nullable: true})
    advantagesEmployer?: AdvantagesEmployer;
}


@Resolver(AdvantagesEmployer)
export class AdvantagesEmployerResolver {
    @Query(() => [AdvantagesEmployer], {nullable: true})
    async parametersEmployer(@Arg("idEmployer") idEmployer: number): Promise<AdvantagesEmployer[]> {
        return AdvantagesEmployer.find({
            where: {
                idEmployer: idEmployer
            }
        })
    }

    @Mutation(() => AdvantagesEmployerResponse)
    @UseMiddleware(isAuth)
    async createAdvantagesEmployer(
        @Arg("options") options: AdvantagesEmployerInput,
    ): Promise<AdvantagesEmployerResponse> {
        const errors = validateAdvantagesEmployer(options);
        if (errors) {
            return {errors};
        }
        let advantagesEmployer;
        try {
            const result = await getConnection()
                .createQueryBuilder()
                .insert()
                .into(AdvantagesEmployer)
                .values({
                    idEmployer: options.idEmployer,
                    icon: options.icon,
                    title: options.title,
                    description: options.description,
                })
                .returning("*")
                .execute();
            advantagesEmployer = result.raw[0];
        } catch (err) {
            console.log(errors)
        }
        return {advantagesEmployer};
    }

    @Mutation(() => AdvantagesEmployer, {nullable: true})
    @UseMiddleware(isAuth)
    async updateAdvantagesEmployer(
        @Arg("id") id: number,
        @Arg("input", () => String, {nullable: true}) input: AdvantagesEmployerInput,
    ): Promise<AdvantagesEmployer | null> {
        const advantageEmployer = await AdvantagesEmployer.findOne(id)
        if (!advantageEmployer) {
            return null;
        }
        if (typeof input !== "undefined") {
            // @ts-ignore
            await AdvantagesEmployer.update({id}, ...input)
        }

        return advantageEmployer;
    }

    @Mutation(() => Boolean)
    @UseMiddleware(isAuth)
    async deleteAdvantagesEmployer(
        @Arg("id")
            id: number,
    ):
        Promise<boolean> {
        await AdvantagesEmployer.delete(id);
        return true;
    }
}

