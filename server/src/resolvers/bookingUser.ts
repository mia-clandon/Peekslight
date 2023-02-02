import {Arg, Field, InputType, Mutation, Query, Resolver, UseMiddleware} from "type-graphql";
import {BookingUser} from "../entities/BookingUser";
import {isAuth} from "../middleware/isAuth";

@InputType()
class BookingUserInput {
    @Field()
    idService!: string;

    @Field()
    service!: string;

    @Field()
    dateBegin!: string

    @Field()
    dateBefore!: string

    @Field()
    fio!: string

    @Field()
    contact!: string
}

@Resolver(BookingUser)
export class BookingUserResolver {
    @Query(() => [BookingUser])
    bookingUserList(): Promise<BookingUser[]> {
        return BookingUser.find();
    }

    @Mutation(() => BookingUser)
    @UseMiddleware(isAuth)
    async createBookingUser(
        @Arg("input") input: BookingUserInput
    ): Promise<BookingUser> {
        return BookingUser.create({...input}).save()
    }
}
