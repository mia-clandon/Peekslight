import {ObjectType, Field} from "type-graphql";
import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class BookingDateTime extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column({nullable: false})
    idClient: number;

    @Field()
    @Column({nullable: false})
    idEmployer: number;

    @Field()
    @Column({nullable: false})
    date!: string;

    @Field()
    @Column({nullable: false})
    time!: string;

}
