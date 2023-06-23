import { IAuthWithoutPassword } from 'src/domain/models/auth';
import { IAuthRepository } from 'src/domain/repositories/authRepository.interface';
import { IIsAuthenticatedUseCase } from 'src/domain/usecases/auth/isAuthenticated.interface';

export class IsAuthenticatedUseCase implements IIsAuthenticatedUseCase {
  private authRepository: IAuthRepository;
  constructor(authRepository: IAuthRepository) {
    this.authRepository = authRepository;
  }

  async execute(): Promise<IAuthWithoutPassword> {
    const response = await this.authRepository.isAuthenticated();
    return response.data;
  }
}
