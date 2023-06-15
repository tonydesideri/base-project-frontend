
import { UserRepository } from 'src/data/repositories/user.repository'
import { ICreateUserUseCase } from 'src/domain/usecases/user/createUser.interface'

export class CreateUserUseCase implements ICreateUserUseCase {
  private userRepository: UserRepository
  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async execute(params: ICreateUserUseCase.Params): Promise<void> {
    await this.userRepository.createUser(params)
  }
}
