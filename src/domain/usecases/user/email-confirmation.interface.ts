import { IApiResponse } from 'src/domain/services/api.interface';

export declare namespace TEmailConfirmationUseCase {
  export type Api = IApiResponse<void>;
  export type Model = void;
  export type Params = {
    email: string;
    token: string;
  };
}

export interface IEmailConfirmationUseCase {
  execute: (params: TEmailConfirmationUseCase.Params) => Promise<void>;
}
