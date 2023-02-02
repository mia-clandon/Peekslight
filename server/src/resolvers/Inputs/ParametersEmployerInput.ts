import {Field, InputType} from "type-graphql";

@InputType()
export class ParametersEmployerInput {
    @Field()
    idEmployer: number
    @Field()
    title: string
    @Field()
    description: string
}
