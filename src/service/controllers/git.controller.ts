import { api } from "../api";
import { UserModel } from "../models/user.model";
import { UserDetailModel } from "../models/userDetail.model";

export async function listUsers() {
  return (await api.get("/users")).data as UserModel[];
}

export async function findUserByLogin(login: string) {
  return (await api.get(`/users/${login}`)).data as UserDetailModel;
}
