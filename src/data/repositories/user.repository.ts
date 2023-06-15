import { IUserRepository } from 'src/domain/repositories/userRepository.interface'
import { IApiResponse, IHTTPService } from 'src/domain/services/http.interface'
import { ICreateUserUseCase } from 'src/domain/usecases/user/createUser.interface'
import { IFetchUsersUseCase } from 'src/domain/usecases/user/fetchUsers.interface'


export class UserRepository implements IUserRepository {
  private httpService: IHTTPService

  constructor(httpService: IHTTPService) {
    this.httpService = httpService
  }

  async fetchUsers(): Promise<IFetchUsersUseCase.Model> {
    const res = await this.httpService.get<IApiResponse<IFetchUsersUseCase.Model>>('/user/users')
    return res.data.data
  }

  async createUser(params: ICreateUserUseCase.Params): Promise<void> {
    await this.httpService.post<IApiResponse<void>>('/user/user', params)
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
