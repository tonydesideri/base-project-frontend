import { IAuthWithoutPassword } from 'src/domain/models/auth';
import { IApiResponse } from 'src/domain/services/api.interface';

export declare namespace TIsAuthenticatedUseCase {
  export type Api = IApiResponse<IAuthWithoutPassword>;
  export type Model = IAuthWithoutPassword;
}

export interface IIsAuthenticatedUseCase {
  execute: () => Promise<TIsAuthenticatedUseCase.Model>;
}
