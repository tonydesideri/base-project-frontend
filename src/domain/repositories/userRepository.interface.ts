import { TEmailConfirmationUseCase } from '../usecases/user/email-confirmation.interface';
import { TResendConfirmationEmailUseCase } from '../usecases/user/resend-confirmation-email.interface';

export interface IUserRepository {
  emailConfirmation(params: TEmailConfirmationUseCase.Params): Promise<void>;
  resendConfirmationEmail(
    params: TResendConfirmationEmailUseCase.Params
  ): Promise<void>;
}
