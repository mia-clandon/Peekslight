import {Arg, Field, InputType, Mutation, Query, Resolver, UseMiddleware} from "type-graphql";
import {isAuth} from "../middleware/isAuth";
import {ReviewEmployer} from "../entities/ReviewEmployer";

@InputType()
class ReviewEmployerInput {
    @Field()
    score: number;
    @Field()
    scoreCommunicate: number;
    @Field()
    scoreClear: number;
    @Field()
    scoreArrival: number;
    @Field()
    scoreAccuracy: number;
    @Field()
    scoreLocate: number;
    @Field()
    scoreRatio: number;
    @Field()
    title: string
    @Field()
    description: string
    @Field()
    service: string
}

@Resolver(ReviewEmployer)
export class ReviewEmployerResolver {
    @Query(() => [ReviewEmployer])
    reviewEmployersList(): Promise<ReviewEmployer[]> {
        return ReviewEmployer.find()
    }

    @Query(() => [ReviewEmployer], {nullable: true})
    async reviewEmployer(@Arg("idEmployer") idEmployer: number): Promise<ReviewEmployer[]> {
        return ReviewEmployer.find({
            where: {
                idEmployer: idEmployer
            }
        })
    }

    @Mutation(() => ReviewEmployer)
    @UseMiddleware(isAuth)
    async createReviewEmployer(
        @Arg("input") input: ReviewEmployerInput,
    ): Promise<ReviewEmployer> {
        return ReviewEmployer.create({
            ...input
        }).save();
    }
}
