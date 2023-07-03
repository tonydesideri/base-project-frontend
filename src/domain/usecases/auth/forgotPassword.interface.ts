import { IApiResponse } from 'src/domain/services/api.interface';

export declare namespace TForgotPasswordUseCase {
  export type Api = IApiResponse<void>;
  export type Model = void;
  export type Params = {
    email: string;
  };
}

export interface IForgotPasswordUseCase {
  execute: (params: TForgotPasswordUseCase.Params) => Promise<void>;
}
