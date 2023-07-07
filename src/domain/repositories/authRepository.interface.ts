import { TForgotPasswordUseCase } from '../usecases/auth/forgotPassword.interface';
import { TIsAuthenticatedUseCase } from '../usecases/auth/isAuthenticated.interface';
import { TPreloadResetPasswordUseCase } from '../usecases/auth/preload-reset-password.interface';
import { TResetPasswordUseCase } from '../usecases/auth/reset-password.interface';
import { TSignInUseCase } from '../usecases/auth/signin.interface';
import { TSignUpUseCase } from '../usecases/auth/signup.interface';

export interface IAuthRepository {
  signin(params: TSignInUseCase.Params): Promise<void>;
  signup(params: TSignUpUseCase.Params): Promise<void>;
  isAuthenticated(): Promise<TIsAuthenticatedUseCase.Api>;
  forgotPassword(params: TForgotPasswordUseCase.Params): Promise<void>;
  resetPassword(params: TResetPasswordUseCase.Params): Promise<void>;
  preloadResetPassword(
    params: TPreloadResetPasswordUseCase.Params
  ): Promise<void>;
}
