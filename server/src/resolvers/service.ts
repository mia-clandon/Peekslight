import {Arg, Field, InputType, Int, Mutation, ObjectType, Query, Resolver} from "type-graphql";
import {Service} from "../entities/Service";
import {getConnection} from "typeorm";
import {FieldError} from "./fieldError";

@InputType()
class ServiceInput {
    @Field()
    title: string
    @Field()
    category: string
    @Field()
    description: string
    @Field()
    price: string
    @Field()
    location: string
}

@ObjectType()
class PaginatedServices {
    @Field(() => [Service])
    services: Service[];
    @Field()
    hasMore: boolean;
}

@ObjectType()
class ServiceResponse {
    @Field(() => [FieldError], {nullable: true})
    errors?: FieldError[];

    @Field(() => Service, {nullable: true})
    serviceSearch?: Service[];
}

@Resolver(Service)
export class ServiceResolver {
    @Query(() => PaginatedServices)
    async services(
        @Arg("limit", () => Int) limit: number,
        @Arg("cursor", () => String, {nullable: true}) cursor: string | null
    ): Promise<PaginatedServices> {
        const realLimit = Math.min(50, limit);
        const realLimitPlusOne = realLimit + 1;

        const replacements: any[] = [realLimitPlusOne];

        if (cursor) {
            replacements.push(new Date(parseInt(cursor)));
        }

        const services = await getConnection().query(
            `
    select e.*
    from service e
    ${cursor ? `where e."createdAt" < $2` : ""}
    order by e."createdAt" DESC
    limit $1
    `,
            replacements
        );

        return {
            services: services.slice(0, realLimit),
            hasMore: services.length === realLimitPlusOne,
        };
    }

    @Query(() => [Service])
    async servicesList(): Promise<Service[]> {
        return Service.find();
    }

    @Query(() => Service, {nullable: true})
    async service(@Arg("id") id: number): Promise<Service | undefined> {
        return Service.findOne(id)
    }

    @Mutation(() => ServiceResponse)
    async searchService(
        @Arg("requestQuery") requestQuery: string,
    ): Promise<ServiceResponse> {
        const serviceSearch = await Service.find(
            requestQuery
                ? {where: {title: requestQuery}}
                : {where: {category: requestQuery}}
        );
        if (!serviceSearch) {
            return {
                errors: [
                    {
                        field: "requestQuery",
                        message: "Услуги по такому запросу не существует",
                    },
                ],
            };
        }
        return {
            serviceSearch,
        };
    }

    @Mutation(() => Service)
    // @UseMiddleware(isAuth)
    async createService(
        @Arg("input") input: ServiceInput,
    ): Promise<Service> {
        return Service.create({
            ...input,
        }).save();
    }


    @Mutation(() => Service, {nullable: true})
    // @UseMiddleware(isAuth)
    async updateService(
        @Arg("id") id: number,
        @Arg("input", () => String, {nullable: true}) input: ServiceInput,
    ): Promise<Service | null> {
        const service = await Service.findOne(id)
        if (!service) {
            return null;
        }
        if (typeof input !== "undefined") {
            // @ts-ignore
            await Service.update({id}, ...input)
        }

        return service;
    }

    @Mutation(() => Boolean)
    // @UseMiddleware(isAuth)
    async deleteService(
        @Arg("id", () => Int) id: number,
    ): Promise<boolean> {
        await Service.delete({id});
        return true;
    }
}

