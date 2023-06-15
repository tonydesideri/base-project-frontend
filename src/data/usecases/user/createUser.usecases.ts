import { UserRepository } from 'src/data/repository/user.repository'

export class CreateUserUseCase {
  private userRepository: UserRepository
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async execute(email: string, password: string): Promise<void> {
    await this.userRepository.createUser({
      email,
      password,
    })
  }
}
