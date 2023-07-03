export declare namespace TSignUpUseCase {
  export type Params = {
    name: string;
    email: string;
    password: string;
  };
}

export interface ISignUpUseCase {
  execute: (params: TSignUpUseCase.Params) => Promise<void>;
}
