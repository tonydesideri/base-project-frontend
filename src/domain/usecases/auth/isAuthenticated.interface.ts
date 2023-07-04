import { IApiResponse } from 'src/domain/services/api.interface';

export declare namespace TIsAuthenticatedUseCase {
  export type Model = {
    name: string;
    email: string;
    isVerifiedEmail: boolean;
  };
  export type Api = IApiResponse<Model>;
}

export interface IIsAuthenticatedUseCase {
  execute: () => Promise<TIsAuthenticatedUseCase.Model>;
}
