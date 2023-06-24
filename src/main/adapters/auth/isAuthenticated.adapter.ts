import { useQuery } from 'react-query';
import { AuthRepository } from 'src/data/repositories/auth.repository';
import { IsAuthenticatedUseCase } from 'src/data/usecases/auth/isAuthenticated.usecase';
import { AuthM } from 'src/domain/models/auth';
import { HttpService } from 'src/infrastructure/services/http.service';

export function useIsAuthenticatedAdapter(isUser: boolean) {
  const useCase = new IsAuthenticatedUseCase(
    new AuthRepository(new HttpService())
  );

  const { data, isLoading, isError, isSuccess } = useQuery<AuthM>({
    queryKey: ['isAuthenticated'],
    queryFn: async () => await useCase.execute(),
    enabled: !isUser,
    refetchOnWindowFocus: false
  });

  return {
    isAuthenticated: data,
    isAuthenticatedLoading: isLoading,
    isAuthenticatedSuccess: isSuccess,
    isAuthenticatedError: isError
  };
}
