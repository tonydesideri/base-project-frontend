
import { UserRepository } from 'src/data/repositories/user.repository'
import { IFetchUsersUseCase } from 'src/domain/usecases/user/fetchUsers.interface'

export class FetchUsersUseCase implements IFetchUsersUseCase {
  private userRepository: UserRepository
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async execute(): Promise<IFetchUsersUseCase.Model | undefined> {
    const users = await this.userRepository.fetchUsers()
    if (users.length) {
      return users
    }
    return undefined
  }
}
