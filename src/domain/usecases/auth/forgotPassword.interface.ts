import { AuthM } from 'src/domain/models/auth';
import { IApiResponse } from 'src/domain/services/api.interface';

export declare namespace TForgotPasswordUseCase {
  export type Api = IApiResponse<void>;
  export type Model = void;
  export type Params = AuthM;
}

export interface IForgotPasswordUseCase {
  execute: (params: TForgotPasswordUseCase.Params) => Promise<void>;
}