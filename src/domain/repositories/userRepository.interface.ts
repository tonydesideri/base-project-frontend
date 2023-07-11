import { TEmailConfirmationUseCase } from '../usecases/user/email-confirmation.interface';

export interface IUserRepository {
  emailConfirmation(params: TEmailConfirmationUseCase.Params): Promise<void>;
}
