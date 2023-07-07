import { IApiResponse } from 'src/domain/services/api.interface';

export declare namespace TPreloadResetPasswordUseCase {
  export type Api = IApiResponse<void>;
  export type Model = void;
  export type Params = {
    email: string;
    token: string;
  };
}

export interface IPreloadResetPasswordUseCase {
  execute: (params: TPreloadResetPasswordUseCase.Params) => Promise<void>;
}
