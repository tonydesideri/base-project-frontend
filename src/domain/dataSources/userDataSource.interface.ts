import { UserM } from "../models/user";

export interface IUserDataSource {
  getUsers(): Promise<UserM[]>;
}