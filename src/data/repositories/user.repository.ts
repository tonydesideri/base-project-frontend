import { IUserRepository } from 'src/domain/repositories/userRepository.interface';
import { TEmailConfirmationUseCase } from 'src/domain/usecases/user/email-confirmation.interface';
import { TResendConfirmationEmailUseCase } from 'src/domain/usecases/user/resend-confirmation-email.interface';
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

  async resendConfirmationEmail(
    params: TResendConfirmationEmailUseCase.Params
  ): Promise<void> {
    await this.httpService.post<void>('user/resend-confirmation-email', params);
  }
}
