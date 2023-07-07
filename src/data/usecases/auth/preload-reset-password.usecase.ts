import { IAuthRepository } from 'src/domain/repositories/authRepository.interface';
import {
  IPreloadResetPasswordUseCase,
  TPreloadResetPasswordUseCase
} from 'src/domain/usecases/auth/preload-reset-password.interface';

export class PreloadResetPasswordUseCase
  implements IPreloadResetPasswordUseCase
{
  private authRepository: IAuthRepository;
  constructor(authRepository: IAuthRepository) {
    this.authRepository = authRepository;
  }

  async execute(params: TPreloadResetPasswordUseCase.Params): Promise<void> {
    await this.authRepository.preloadResetPassword(params);
  }
}
