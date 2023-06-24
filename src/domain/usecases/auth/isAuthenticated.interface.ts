import { AuthM } from 'src/domain/models/auth';
import { IApiResponse } from 'src/domain/services/api.interface';

export declare namespace TIsAuthenticatedUseCase {
  export type Api = IApiResponse<AuthM>;
  export type Model = AuthM;
}

export interface IIsAuthenticatedUseCase {
  execute: () => Promise<TIsAuthenticatedUseCase.Model>;
}
