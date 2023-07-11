import { IUserRepository } from 'src/domain/repositories/userRepository.interface';
import {
  IEmailConfirmationUseCase,
  TEmailConfirmationUseCase
} from 'src/domain/usecases/user/email-confirmation.interface';

export class EmailConfirmationUseCase implements IEmailConfirmationUseCase {
  private userRepository: IUserRepository;
  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  async execute(params: TEmailConfirmationUseCase.Params): Promise<void> {
    await this.userRepository.emailConfirmation(params);
  }
}
