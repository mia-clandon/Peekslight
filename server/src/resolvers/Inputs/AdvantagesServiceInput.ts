import {Field, InputType} from "type-graphql";

@InputType()
export class AdvantagesServiceInput {
    @Field()
    idService: number
    @Field()
    icon: any
    @Field()
    title: string
    @Field()
    description: string
}
