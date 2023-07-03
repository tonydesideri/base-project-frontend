import { AuthRepository } from 'src/data/repositories/auth.repository';
import {
  ISignUpUseCase,
  TSignUpUseCase
} from 'src/domain/usecases/auth/signup.interface';

export class SignUpUseCase implements ISignUpUseCase {
  private authRepository: AuthRepository;
  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  async execute(params: TSignUpUseCase.Params): Promise<void> {
    await this.authRepository.signup(params);
  }
}
