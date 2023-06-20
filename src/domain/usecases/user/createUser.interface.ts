export declare namespace TCreateUserUseCase {
  export type Params = {
    email: string;
    password: string;
  };
}

export interface ICreateUserUseCase {
  execute: (params: TCreateUserUseCase.Params) => Promise<void>;
}
