import {Field, InputType} from "type-graphql";

@InputType()
export  class EmployerInput {
  @Field()
  firstname: string
  @Field()
  lastname: string
  @Field()
  cardDescription: string
  @Field()
  description: string
  @Field()
  position: string
  @Field()
  email: string
  @Field()
  phone: string
  @Field()
  password: string
  @Field()
  avatar: string
  @Field()
  averageTime: string
  @Field()
  city: string
}
