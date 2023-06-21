import { IAuthRepository } from 'src/domain/repositories/authRepository.interface';
import { TSignInUseCase } from 'src/domain/usecases/auth/signin.interface';
import { IHttpService } from '../services/http.interface';

export class AuthRepository implements IAuthRepository {
  private httpService: IHttpService;

  constructor(httpService: IHttpService) {
    this.httpService = httpService;
  }

  async signin(params: TSignInUseCase.Params): Promise<void> {
    await this.httpService.post<void>('/auth/login', params);
  }
}
