import { MiddlewareFn } from "type-graphql";
import { MyContext } from "../types/types";

export const isAuth: MiddlewareFn<MyContext> = ({ context }, next) => {
  if (!context.req.session.employerId) {
    throw new Error("not authenticated");
  }

  return next();
};
