import { IAuthRepository } from 'src/domain/repositories/authRepository.interface';
import {
  IResetPasswordUseCase,
  TResetPasswordUseCase
} from 'src/domain/usecases/auth/reset-password.interface';

export class ResetPasswordUseCase implements IResetPasswordUseCase {
  private authRepository: IAuthRepository;
  constructor(authRepository: IAuthRepository) {
    this.authRepository = authRepository;
  }

  async execute(params: TResetPasswordUseCase.Params): Promise<void> {
    await this.authRepository.resetPassword(params);
  }
}
