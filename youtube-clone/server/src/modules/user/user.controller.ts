import {createUser} from "./user.service";
import {StatusCodes} from "http-status-codes";
import {Request, Response} from 'express'
import {RegisterUserBody} from "./user.schema";

export async function registerUserHandler(req: Request<{}, {}, RegisterUserBody>, res: Response) {
  const {username, email, password} = req.body;
  try {
    await createUser({username, email, password});
    return res.status(StatusCodes.CREATED).send('User created successfully.');
  } catch (e: any) {
    if (e.code === 11000) {
      return res.status(StatusCodes.CONFLICT).send("User already exists.")
    }
  }
}