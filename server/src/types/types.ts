import { Request, Response } from "express";
import { Redis } from "ioredis";
import { createUserLoader } from "../utils/createUserLoader";
import { createUpdootLoader } from "../utils/createUpdootLoader";
import {createEmployerLoader} from "../utils/createEmployerLoader";

export type MyContext = {
  req: Request & { session: Express.Session };
  redis: Redis;
  res: Response;
  userLoader: ReturnType<typeof createUserLoader>;
  employerLoader: ReturnType<typeof createEmployerLoader>;
  updootLoader: ReturnType<typeof createUpdootLoader>;
};
