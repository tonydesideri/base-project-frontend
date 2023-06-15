import { UserApiM, UserM } from 'src/domain/models/user'
import { IUserRepository } from 'src/domain/repositories/userRepository.interface'
import { IHTTPService } from 'src/domain/services/http.interface'

export class UserRepository implements IUserRepository {
  private httpService: IHTTPService

  constructor(httpService: IHTTPService) {
    this.httpService = httpService
  }

  async getUsers(): Promise<UserM[]> {
    const res = await this.httpService.get<UserApiM>('/user/users')
    return res.data
  }

  async createUser(
    data: Omit<UserM, 'id' | 'createdate' | 'updateddate' | 'lastLogin'>,
  ) {
    const res = await this.httpService.post<UserApiM>('/user/user', data)
    return res
  }

  // mapToModel(dto: UserDTO): User {
  //   return {
  //     id: dto.id,
  //     name: dto.name,
  //     username: dto.username,
  //     email: dto.email,
  //   };
  // }
}
