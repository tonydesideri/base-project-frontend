export declare namespace TCreateAccountUseCase {
  export type Params = {
    email: string;
    password: string;
  };
}

export interface ICreateAccountUseCase {
  execute: (params: TCreateAccountUseCase.Params) => Promise<void>;
}
