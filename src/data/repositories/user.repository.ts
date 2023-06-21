import { IUserRepository } from 'src/domain/repositories/userRepository.interface';
import { TCreateAccountUseCase } from 'src/domain/usecases/user/createAccount.interface';
import { TFetchUsersUseCase } from 'src/domain/usecases/user/fetchUsers.interface';
import { IHttpService } from '../services/http.interface';

export class UserRepository implements IUserRepository {
  private httpService: IHttpService;

  constructor(httpService: IHttpService) {
    this.httpService = httpService;
  }

  async fetchUsers(): Promise<TFetchUsersUseCase.Api> {
    const response = await this.httpService.get<TFetchUsersUseCase.Api>(
      '/user/users'
    );
    return response.data;
  }

  async createAccount(params: TCreateAccountUseCase.Params): Promise<void> {
    await this.httpService.post<void>('/user/user', params);
  }

  // mapToModel(user: IFetchUsersUseCase.Model): UserM {
  //   return {
  //     id: user.id,
  //     email: user.email,
  //     password: undefined,
  //     createdate: user.createdate,
  //     updateddate: user.updateddate,
  //     lastLogin: user.lastLogin,
  //   }
  // }
}
