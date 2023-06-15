import { IUserWithoutPassword } from "src/domain/models/user"

export interface IFetchUsersUseCase {
  execute(): Promise<IFetchUsersUseCase.Model | undefined>
}

export namespace IFetchUsersUseCase {
  export type Model = IUserWithoutPassword[]
}