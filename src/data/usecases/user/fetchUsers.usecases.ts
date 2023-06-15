import { UserRepository } from 'src/data/repository/user.repository'
import { UserM } from 'src/domain/models/user'

export class FetchUsersUseCase {
  private userRepository: UserRepository
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async execute(): Promise<UserM[] | undefined> {
    const users = await this.userRepository.getUsers()
    if (users.length) {
      return users
    }
    return undefined
  }
}
