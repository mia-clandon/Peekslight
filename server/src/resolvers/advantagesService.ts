import {Arg, Field, Mutation, ObjectType, Query, Resolver, UseMiddleware} from "type-graphql";
import {isAuth} from "../middleware/isAuth";
import {FieldError} from "./fieldError";
import {getConnection} from "typeorm";
import {AdvantagesService} from "../entities/AdvantagesService";
import {AdvantagesServiceInput} from "./Inputs/AdvantagesServiceInput";
import {validateAdvantagesService} from "../utils/validateAdvanatagesService";

@ObjectType()
class AdvantagesServiceResponse {
    @Field(() => [FieldError], {nullable: true})
    errors?: FieldError[];

    @Field(() => AdvantagesService, {nullable: true})
    advantagesService?: AdvantagesService;
}


@Resolver(AdvantagesService)
export class AdvantagesServiceResolver {
    @Query(() => [AdvantagesService], {nullable: true})
    async parametersEmployer(@Arg("idService") idService: number): Promise<AdvantagesService[]> {
        return AdvantagesService.find({
            where: {
                idService: idService
            }
        })
    }

    @Mutation(() => AdvantagesServiceResponse)
    @UseMiddleware(isAuth)
    async createAdvantagesService(
        @Arg("options") options: AdvantagesServiceInput,
    ): Promise<AdvantagesServiceResponse> {
        const errors = validateAdvantagesService(options);
        if (errors) {
            return {errors};
        }
        let advantagesService;
        try {
            const result = await getConnection()
                .createQueryBuilder()
                .insert()
                .into(AdvantagesService)
                .values({
                    idService: options.idService,
                    icon: options.icon,
                    title: options.title,
                    description: options.description,
                })
                .returning("*")
                .execute();
            advantagesService = result.raw[0];
        } catch (err) {
            console.log(errors)
        }
        return {advantagesService};
    }

    @Mutation(() => AdvantagesService, {nullable: true})
    @UseMiddleware(isAuth)
    async updateAdvantagesService(
        @Arg("id") id: number,
        @Arg("input", () => String, {nullable: true}) input: AdvantagesServiceInput,
    ): Promise<AdvantagesService | null> {
        const advantageService = await AdvantagesService.findOne(id)
        if (!advantageService) {
            return null;
        }
        if (typeof input !== "undefined") {
            // @ts-ignore
            await AdvantagesService.update({id}, ...input)
        }

        return advantageService;
    }

    @Mutation(() => Boolean)
    @UseMiddleware(isAuth)
    async deleteAdvantagesService(
        @Arg("id")
            id: number,
    ):
        Promise<boolean> {
        await AdvantagesService.delete(id);
        return true;
    }
}

