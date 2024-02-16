import {User, UserModel} from "./user.model";

export async function createUser(data: Omit<User, "comparePassword">) {
  return await UserModel.create(data);
}

export async function findUserByEmail(email: User['email']) {
  return UserModel.findOne({email})
}