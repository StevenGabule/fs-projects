import {UserModel} from "./user.model";

export async function createUser(data: any) {
  return await UserModel.create(data);
}