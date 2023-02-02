import {Arg, Field, InputType, Mutation, Query, Resolver} from "type-graphql";
import {ReviewService} from "../entities/ReviewService";

@InputType()
class ReviewServiceInput {
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

@Resolver(ReviewService)
export class ReviewServiceResolver {
    @Query(() => [ReviewService])
    reviewServiceList(): Promise<ReviewService[]> {
        return ReviewService.find()
    }

    @Query(() => [ReviewService], {nullable: true})
    async reviewService(@Arg("idService") idService: number): Promise<ReviewService[]> {
        return ReviewService.find({
            where: {
                idService: idService
            }
        })
    }

    @Mutation(() => ReviewService)
    // @UseMiddleware(isAuth)
    async createReviewService(
        @Arg("input") input: ReviewServiceInput
    ): Promise<ReviewService> {
        return ReviewService.create({
            ...input
        }).save();
    }
}
