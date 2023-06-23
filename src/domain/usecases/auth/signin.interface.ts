import { AuthM } from 'src/domain/models/auth';

export declare namespace TSignInUseCase {
  export type Params = AuthM;
}

export interface ISignInUseCase {
  execute: (params: TSignInUseCase.Params) => Promise<void>;
}
