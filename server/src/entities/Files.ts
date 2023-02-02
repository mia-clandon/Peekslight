import { ObjectType, Field } from "type-graphql";
import {
  BaseEntity,
  Entity,
} from "typeorm";

@ObjectType()
@Entity()
export class Fiels extends BaseEntity {
  @Field()
  fiels!: [string];
}
