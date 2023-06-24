import { TIsAuthenticatedUseCase } from '../usecases/auth/isAuthenticated.interface';
import { TSignInUseCase } from '../usecases/auth/signin.interface';

export interface IAuthRepository {
  signin(params: TSignInUseCase.Params): Promise<void>;
  isAuthenticated(): Promise<TIsAuthenticatedUseCase.Api>;
}
