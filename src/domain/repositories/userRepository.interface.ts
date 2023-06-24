import { TCreateAccountUseCase } from '../usecases/user/createAccount.interface';

export interface IUserRepository {
  createAccount(params: TCreateAccountUseCase.Params): Promise<void>;
}
