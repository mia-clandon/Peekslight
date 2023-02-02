import {Field, InputType} from "type-graphql";

@InputType()
export class AdvantagesEmployerInput {
    @Field()
    idEmployer: number
    @Field()
    icon: any
    @Field()
    title: string
    @Field()
    description: string
}
