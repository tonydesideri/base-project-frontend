import { ICreateUserUseCase } from '../usecases/user/createUser.interface';
import { IFetchUsersUseCase } from '../usecases/user/fetchUsers.interface';

export interface IUserRepository {
  fetchUsers(): Promise<IFetchUsersUseCase.Api>;
  createUser(params: ICreateUserUseCase.Params): Promise<void>;
}
