import {ObjectType, Field} from "type-graphql";
import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";

@ObjectType()
@Entity()
export class UploadImage extends BaseEntity {
    @Field()
    @PrimaryGeneratedColumn()
    id!: number;

    @Field()
    @Column({nullable: false})
    filename!: string;

    @Field()
    @Column({nullable: false})
    mimetype!: string;

    @Field()
    @Column({nullable: false})
    encoding!: string;

    @Field()
    @Column({nullable: false})
    createReadStream!: string;

    @Field(() => String)
    @CreateDateColumn()
    createdAt: Date;

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt: Date;
}

