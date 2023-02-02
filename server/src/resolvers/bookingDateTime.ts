import {Arg, Field, InputType, Mutation, Query, Resolver, UseMiddleware} from "type-graphql";
import {BookingDateTime} from "../entities/BookingDateTime";
import {isAuth} from "../middleware/isAuth";

@InputType()
class BookingDateTimeInput {
    @Field()
    date: string
    @Field()
    time: string
}

@Resolver(BookingDateTime)
export class BookingDateTimeResolver {
    @Query(() => [BookingDateTime])
    bookingDateTimeList(): Promise<BookingDateTime[]> {
        return BookingDateTime.find()
    }

    @Mutation(() => BookingDateTime)
    @UseMiddleware(isAuth)
    async createBookingDateTime(
        @Arg("input") input: BookingDateTimeInput
    ): Promise<BookingDateTime> {
        return BookingDateTime.create({
            ...input
        }).save();
    }
}
