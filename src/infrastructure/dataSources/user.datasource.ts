import { IUserDataSource } from '../../domain/dataSources/userDataSource.interface'
import { UserM } from '../../domain/models/user'
import { UserDTO } from '../dtos/user.dto'
import { Http } from '../services/http'

export class UserDataSource implements IUserDataSource {
  async getUsers(): Promise<UserM[]> {
    const res = await Http.get<UserDTO[]>('/users')
    return res.data.map((x) => this.mapToModel(x))
  }

  mapToModel(dto: UserDTO): UserM {
    return {
      id: dto.id,
      name: dto.name,
      username: dto.username,
      email: dto.email,
    }
  }
}
