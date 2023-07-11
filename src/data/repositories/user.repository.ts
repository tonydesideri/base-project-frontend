import { IUserRepository } from 'src/domain/repositories/userRepository.interface';
import { TEmailConfirmationUseCase } from 'src/domain/usecases/user/email-confirmation.interface';
import { IHttpService } from '../services/http.interface';

export class UserRepository implements IUserRepository {
  private httpService: IHttpService;

  constructor(httpService: IHttpService) {
    this.httpService = httpService;
  }

  async emailConfirmation(
    params: TEmailConfirmationUseCase.Params
  ): Promise<void> {
    await this.httpService.post<void>('user/email-confirmation', params);
  }
}
