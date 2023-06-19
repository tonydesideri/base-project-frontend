import { IUserWithoutPassword } from "src/domain/models/user"
import { IApiResponse } from "src/domain/services/api.interface"

export interface IFetchUsersUseCase {
  execute(): Promise<IFetchUsersUseCase.Model | undefined>
}

export namespace IFetchUsersUseCase {
  export type Model = IUserWithoutPassword[]
  export type Api = IApiResponse<IUserWithoutPassword[]>
}