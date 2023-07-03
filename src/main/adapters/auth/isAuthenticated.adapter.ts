import { useQuery } from 'react-query';
import { AuthRepository } from 'src/data/repositories/auth.repository';
import { IsAuthenticatedUseCase } from 'src/data/usecases/auth/isAuthenticated.usecase';
import { TIsAuthenticatedUseCase } from 'src/domain/usecases/auth/isAuthenticated.interface';
import { HttpService } from 'src/infrastructure/services/http.service';

export function useIsAuthenticatedAdapter(isUser: boolean) {
  const useCase = new IsAuthenticatedUseCase(
    new AuthRepository(new HttpService())
  );

  const { data, isLoading, isError, isSuccess } =
    useQuery<TIsAuthenticatedUseCase.Model>({
      queryKey: ['isAuthenticated'],
      queryFn: async () => await useCase.execute(),
      enabled: !isUser
    });

  return {
    isAuthenticated: data,
    isAuthenticatedLoading: isLoading,
    isAuthenticatedSuccess: isSuccess,
    isAuthenticatedError: isError
  };
}
