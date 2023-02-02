import {Arg, Field, Mutation, ObjectType, Query, Resolver, UseMiddleware} from "type-graphql";
import {isAuth} from "../middleware/isAuth";
import {FieldError} from "./fieldError";
import {getConnection} from "typeorm";
import {ParameterService} from "../entities/ParameterService";
import {validateParametersService} from "../utils/validateParametersService";
import {ParametersServiceInput} from "./Inputs/ParametersServiceInput";

@ObjectType()
class ParameterServiceResponse {
    @Field(() => [FieldError], {nullable: true})
    errors?: FieldError[];

    @Field(() => ParameterService, {nullable: true})
    parameterService?: ParameterService;
}


@Resolver(ParameterService)
export class ParameterServicesResolver {
    @Query(() => [ParameterService], {nullable: true})
    async parametersService(@Arg("idService") idService: number): Promise<ParameterService[]> {
        return ParameterService.find({
            where: {
                idService: idService
            }
        })
    }

    //
    @Mutation(() => ParameterServiceResponse)
    @UseMiddleware(isAuth)
    async createParameterService(
        @Arg("options") options: ParametersServiceInput,
    ): Promise<ParameterServiceResponse> {
        const errors = validateParametersService(options);
        if (errors) {
            return {errors};
        }
        let parameterService;
        try {
            const result = await getConnection()
                .createQueryBuilder()
                .insert()
                .into(ParameterService)
                .values({
                    idService: options.idService,
                    title: options.title,
                    description: options.description,
                })
                .returning("*")
                .execute();
            parameterService = result.raw[0];
        } catch (err) {
            console.log(errors)
        }
        return {parameterService};
    }

    @Mutation(() => ParameterService, {nullable: true})
    @UseMiddleware(isAuth)
    async updateParameterService(
        @Arg("id") id: number,
        @Arg("input", () => String, {nullable: true}) input: ParametersServiceInput,
    ): Promise<ParameterService | null> {
        const parameterService = await ParameterService.findOne(id)
        if (!parameterService) {
            return null;
        }
        if (typeof input !== "undefined") {
            // @ts-ignore
            await ParameterService.update({id}, ...input)
        }

        return parameterService;
    }

    @Mutation(() => Boolean)
    @UseMiddleware(isAuth)
    async deleteParameterService(
        @Arg("id")
            id: number,
    ):
        Promise<boolean> {
        await ParameterService.delete(id);
        return true;
    }
}

