import { AuthRepository } from 'src/data/repositories/auth.repository';
import {
  ISignInUseCase,
  TSignInUseCase
} from 'src/domain/usecases/auth/signin.interface';

export class SignInUseCase implements ISignInUseCase {
  private authRepository: AuthRepository;
  constructor(authRepository: AuthRepository) {
    this.authRepository = authRepository;
  }

  async execute(params: TSignInUseCase.Params): Promise<void> {
    await this.authRepository.signin(params);
  }
}
