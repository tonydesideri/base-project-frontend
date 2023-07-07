import { IApiResponse } from 'src/domain/services/api.interface';

export declare namespace TResetPasswordUseCase {
  export type Api = IApiResponse<void>;
  export type Model = void;
  export type Params = {
    password: string;
    email: string;
    token: string;
  };
}

export interface IResetPasswordUseCase {
  execute: (params: TResetPasswordUseCase.Params) => Promise<void>;
}
