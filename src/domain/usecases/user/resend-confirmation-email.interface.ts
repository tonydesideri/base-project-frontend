import { IApiResponse } from 'src/domain/services/api.interface';

export declare namespace TResendConfirmationEmailUseCase {
  export type Api = IApiResponse<void>;
  export type Model = void;
  export type Params = {
    email: string;
  };
}

export interface IResendConfirmationEmailUseCase {
  execute: (params: TResendConfirmationEmailUseCase.Params) => Promise<void>;
}
