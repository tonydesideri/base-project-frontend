import { UserRepository } from 'src/data/repositories/user.repository';
import {
  ICreateUserUseCase,
  TCreateUserUseCase
} from 'src/domain/usecases/user/createUser.interface';

export class CreateUserUseCase implements ICreateUserUseCase {
  private userRepository: UserRepository;
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async execute(params: TCreateUserUseCase.Params): Promise<void> {
    await this.userRepository.createUser(params);
  }
}
