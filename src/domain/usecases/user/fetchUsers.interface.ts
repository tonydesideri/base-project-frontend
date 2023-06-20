import { IUserWithoutPassword } from 'src/domain/models/user';
import { IApiResponse } from 'src/domain/services/api.interface';

export namespace TFetchUsersUseCase {
  export type Model = IUserWithoutPassword[];
  export type Api = IApiResponse<IUserWithoutPassword[]>;
}

export interface IFetchUsersUseCase {
  execute(): Promise<TFetchUsersUseCase.Model | undefined>;
}
