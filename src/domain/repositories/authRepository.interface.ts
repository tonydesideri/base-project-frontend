import { TForgotPasswordUseCase } from '../usecases/auth/forgotPassword.interface';
import { TIsAuthenticatedUseCase } from '../usecases/auth/isAuthenticated.interface';
import { TResetPasswordUseCase } from '../usecases/auth/resetPassword.interface';
import { TSignInUseCase } from '../usecases/auth/signin.interface';

export interface IAuthRepository {
  signin(params: TSignInUseCase.Params): Promise<void>;
  isAuthenticated(): Promise<TIsAuthenticatedUseCase.Api>;
  forgotPassword(params: TForgotPasswordUseCase.Params): Promise<void>;
  resetPassword(params: TResetPasswordUseCase.Params): Promise<void>;
}
