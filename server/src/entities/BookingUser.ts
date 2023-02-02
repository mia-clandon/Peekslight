import {ObjectType, Field} from "type-graphql";
import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class BookingUser extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column({nullable: false})
    idService: string;

    @Field()
    @Column({nullable: false})
    service!: string;

    @Field()
    @Column({nullable: false})
    dateBegin!: string

    @Field()
    @Column({nullable: false})
    dateBefore!: string

    @Field()
    @Column({nullable: false})
    fio!: string

    @Field()
    @Column({nullable: false})
    contact!: string
}
