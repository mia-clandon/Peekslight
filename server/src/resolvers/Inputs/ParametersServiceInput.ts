import {Field, InputType} from "type-graphql";
import {PrimaryGeneratedColumn} from "typeorm";

@InputType()
export class ParametersServiceInput {
    @Field()
    @PrimaryGeneratedColumn()
    id!: number;
    @Field()
    idService: number
    @Field()
    title: string
    @Field()
    description: string
}
