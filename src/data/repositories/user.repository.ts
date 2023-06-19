import { IUserRepository } from 'src/domain/repositories/userRepository.interface'
import { ICreateUserUseCase } from 'src/domain/usecases/user/createUser.interface'
import { IFetchUsersUseCase } from 'src/domain/usecases/user/fetchUsers.interface'
import { IHttpService } from '../services/http.interface'


export class UserRepository implements IUserRepository {
  private httpService: IHttpService

  constructor(httpService: IHttpService) {
    this.httpService = httpService
  }

  async fetchUsers(): Promise<IFetchUsersUseCase.Api> {
    const res = await this.httpService.get<IFetchUsersUseCase.Api>('/user/users')
    return res.data
  }

  async createUser(params: ICreateUserUseCase.Params): Promise<void> {
    await this.httpService.post<void>('/user/user', params)
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
