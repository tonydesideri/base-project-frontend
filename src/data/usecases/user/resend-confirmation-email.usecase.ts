import { IUserRepository } from 'src/domain/repositories/userRepository.interface';
import {
  IResendConfirmationEmailUseCase,
  TResendConfirmationEmailUseCase
} from 'src/domain/usecases/user/resend-confirmation-email.interface';

export class ResendConfirmationEmailUseCase
  implements IResendConfirmationEmailUseCase
{
  private userRepository: IUserRepository;
  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async execute(params: TResendConfirmationEmailUseCase.Params): Promise<void> {
    await this.userRepository.resendConfirmationEmail(params);
  }
}
