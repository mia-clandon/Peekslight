import {Arg, Field, Int, Mutation, ObjectType, Query, Resolver, UseMiddleware} from "type-graphql";
import {ParameterEmployers} from "../entities/internal/employer/ParameterEmployers";
import {isAuth} from "../middleware/isAuth";
import {ParametersEmployerInput} from "./Inputs/ParametersEmployerInput";
import {getConnection} from "typeorm";

@ObjectType()
class PaginatedParameterEmployers {
    @Field(() => [ParameterEmployers])
    parametersEmployer: ParameterEmployers[];
    @Field()
    hasMore: boolean;
}

@Resolver(ParameterEmployers)
export class ParameterEmployersResolver {
    @Query(() => [ParameterEmployers], {nullable: true})
    async parametersEmployer(@Arg("idEmployer") idEmployer: number): Promise<ParameterEmployers[]> {
        return ParameterEmployers.find({
            where: {
                idEmployer: idEmployer
            }
        })
    }

    @Query(() => PaginatedParameterEmployers)
    async parametersEmployerList(
        @Arg("limit", () => Int) limit: number,
        @Arg("cursor", () => String, {nullable: true}) cursor: string | null
    ): Promise<PaginatedParameterEmployers> {
        const realLimit = Math.min(50, limit);
        const realLimitPlusOne = realLimit + 1;

        const replacements: any[] = [realLimitPlusOne];

        if (cursor) {
            replacements.push(new Date(parseInt(cursor)));
        }

        const parametersEmployer = await getConnection().query(
            `
    select e.*
    from parameter_employers e
    ${cursor ? `where e."createdAt" < $2` : ""}
    order by e."createdAt" DESC
    limit $1
    `,
            replacements
        );

        return {
            parametersEmployer: parametersEmployer.slice(0, realLimit),
            hasMore: parametersEmployer.length === realLimitPlusOne,
        };
    }


    @Mutation(() => ParameterEmployers)
    // @UseMiddleware(isAuth)
    async createParameterEmployer(
        @Arg("options") options: ParametersEmployerInput,
    ): Promise<ParameterEmployers> {
        return ParameterEmployers.create({
            ...options,
        }).save();
    }

    @Mutation(() => ParameterEmployers, {nullable: true})
    @UseMiddleware(isAuth)
    async updateParameterEmployer(
        @Arg("id") id: number,
        @Arg("input", () => String, {nullable: true}) input: ParametersEmployerInput,
    ): Promise<ParameterEmployers | null> {
        const parameterService = await ParameterEmployers.findOne(id)
        if (!parameterService) {
            return null;
        }
        if (typeof input !== "undefined") {
            // @ts-ignore
            await ParameterEmployers.update({id}, ...input)
        }

        return parameterService;
    }

    @Mutation(() => Boolean)
    @UseMiddleware(isAuth)
    async deleteParameterEmployer(
        @Arg("id")
            id: number,
    ):
        Promise<boolean> {
        await ParameterEmployers.delete(id);
        return true;
    }
}

