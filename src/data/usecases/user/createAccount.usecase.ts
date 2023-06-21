import { UserRepository } from 'src/data/repositories/user.repository';
import {
  ICreateAccountUseCase,
  TCreateAccountUseCase
} from 'src/domain/usecases/user/createAccount.interface';

export class CreateAccountUseCase implements ICreateAccountUseCase {
  private userRepository: UserRepository;
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(params: TCreateAccountUseCase.Params): Promise<void> {
    await this.userRepository.createAccount(params);
  }
}
