import { IUserDataSource } from "../../domain/dataSources/userDataSource.interface";
import { UserM } from "../../domain/models/user";
import { IUserRepository } from "../../domain/repositories/userRepository.interface";

export class UserRepository implements IUserRepository {
  datasource: IUserDataSource;

  constructor(datasource: IUserDataSource) {
    this.datasource = datasource;
  }

  async getUsers(): Promise<UserM[]> {
    return await this.datasource.getUsers();
  }
}
