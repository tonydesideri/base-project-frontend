import { TCreateAccountUseCase } from '../usecases/user/createAccount.interface';
import { TFetchUsersUseCase } from '../usecases/user/fetchUsers.interface';

export interface IUserRepository {
  fetchUsers(): Promise<TFetchUsersUseCase.Api>;
  createAccount(params: TCreateAccountUseCase.Params): Promise<void>;
}
