import { IAuthRepository } from 'src/domain/repositories/authRepository.interface';
import {
  IForgotPasswordUseCase,
  TForgotPasswordUseCase
} from 'src/domain/usecases/auth/forgotPassword.interface';

export class ForgotPasswordUseCase implements IForgotPasswordUseCase {
  private authRepository: IAuthRepository;
  constructor(authRepository: IAuthRepository) {
    this.authRepository = authRepository;
  }

  async execute(params: TForgotPasswordUseCase.Params): Promise<void> {
    await this.authRepository.forgotPassword(params);
  }
}
