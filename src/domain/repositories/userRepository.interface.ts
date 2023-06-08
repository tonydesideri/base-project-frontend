import { UserM } from "../models/user";

export interface IUserRepository {
  getUsers(): Promise<UserM[]>;
}
