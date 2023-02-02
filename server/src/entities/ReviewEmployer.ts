import {ObjectType, Field} from "type-graphql";
import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
} from "typeorm";

@ObjectType()
@Entity()
export class ReviewEmployer extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column({nullable: false})
    idEmployer: number;

    @Field()
    @Column({nullable: false})
    idClient: number;

    @Field()
    @Column()
    score: number;

    @Field()
    @Column()
    scoreCommunicate: number;

    @Field()
    @Column()
    scoreClear: number;

    @Field()
    @Column()
    scoreArrival: number;

    @Field()
    @Column()
    scoreAccuracy: number;

    @Field()
    @Column()
    scoreLocate: number;

    @Field()
    @Column()
    scoreRatio: number;

    @Field()
    @Column({nullable: false})
    title!: string;

    @Field()
    @Column({nullable: false})
    description!: string;

    @Field()
    @Column({nullable: false})
    service!: string;
}
