export declare namespace TSignInUseCase {
  export type Params = {
    email: string;
    password: string;
  };
}

export interface ISignInUseCase {
  execute: (params: TSignInUseCase.Params) => Promise<void>;
}
