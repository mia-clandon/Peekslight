import {ObjectType, Field} from "type-graphql";
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity, JoinTable, ManyToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {Employer} from "./internal/employer/Employer";

@ObjectType()
@Entity()
export class Service extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column({nullable: false})
    title!: string;

    @Field()
    @Column({nullable: false})
    category!: string;

    @Field()
    @Column({nullable: false})
    description!: string;

    @Field()
    @Column({nullable: false})
    price!:string;

    @Field()
    @Column({nullable: false})
    location!:string;

    @ManyToMany(() => Employer, employer => employer.services)
    @JoinTable()
    employers: Employer[];

    @Field(() => String)
    @CreateDateColumn()
    createdAt: Date;

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt: Date;
}
