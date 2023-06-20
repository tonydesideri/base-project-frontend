import { IUserRepository } from 'src/domain/repositories/userRepository.interface';
import { TCreateUserUseCase } from 'src/domain/usecases/user/createUser.interface';
import { TFetchUsersUseCase } from 'src/domain/usecases/user/fetchUsers.interface';
import { IHttpService } from '../services/http.interface';

export class UserRepository implements IUserRepository {
  private httpService: IHttpService;

  constructor(httpService: IHttpService) {
    this.httpService = httpService;
  }

  async fetchUsers(): Promise<TFetchUsersUseCase.Api> {
    try {
      const response = await this.httpService.get<TFetchUsersUseCase.Api>(
        '/user/users'
      );
      return response.data;
    } catch (error: any) {
      console.log(error.message);
      throw new Error(error.message);
    }
  }

  async createUser(params: TCreateUserUseCase.Params): Promise<void> {
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
