
export namespace ICreateUserUseCase {
  export type Params = {
    email: string
    password: string
  }
}

export interface ICreateUserUseCase {
  execute: (params: ICreateUserUseCase.Params) => Promise<void>
}

