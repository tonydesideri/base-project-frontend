import { IAuthRepository } from 'src/domain/repositories/authRepository.interface';
import { TForgotPasswordUseCase } from 'src/domain/usecases/auth/forgotPassword.interface';
import { TIsAuthenticatedUseCase } from 'src/domain/usecases/auth/isAuthenticated.interface';
import { TResetPasswordUseCase } from 'src/domain/usecases/auth/resetPassword.interface';
import { TSignInUseCase } from 'src/domain/usecases/auth/signin.interface';
import { TSignUpUseCase } from 'src/domain/usecases/auth/signup.interface';
import { IHttpService } from '../services/http.interface';

export class AuthRepository implements IAuthRepository {
  private httpService: IHttpService;

  constructor(httpService: IHttpService) {
    this.httpService = httpService;
  }

  async signin(params: TSignInUseCase.Params): Promise<void> {
    await this.httpService.post<void>('/auth/login', params);
  }

  async signup(params: TSignUpUseCase.Params): Promise<void> {
    await this.httpService.post<void>('/user/user', params);
  }

  async isAuthenticated(): Promise<TIsAuthenticatedUseCase.Api> {
    const response = await this.httpService.get<TIsAuthenticatedUseCase.Api>(
      '/auth/is_authenticated'
    );
    return response.data;
  }

  async forgotPassword(params: TForgotPasswordUseCase.Params): Promise<void> {
    await this.httpService.post<void>('/auth/forgot-password', params);
  }

  async resetPassword(params: TResetPasswordUseCase.Params): Promise<void> {
    await this.httpService.post<void>(
      '/auth/reset-password',
      {
        password: params.password
      },
      {
        params: {
          email: params.email,
          token: params.token
        }
      }
    );
  }
}
