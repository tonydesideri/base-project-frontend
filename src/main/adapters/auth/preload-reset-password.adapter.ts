import { useQuery } from 'react-query';
import { AuthRepository } from 'src/data/repositories/auth.repository';
import { PreloadResetPasswordUseCase } from 'src/data/usecases/auth/preload-reset-password.usecase';
import { TPreloadResetPasswordUseCase } from 'src/domain/usecases/auth/preload-reset-password.interface';
import { HttpService } from 'src/infrastructure/services/http.service';

export function usePreloadResetPasswordAdapter(
  params: TPreloadResetPasswordUseCase.Params
) {
  const useCase = new PreloadResetPasswordUseCase(
    new AuthRepository(new HttpService())
  );

  const { data, isLoading, error, isSuccess } = useQuery(
    ['preloadResetPassword'],
    async () => await useCase.execute(params),
    {
      onError: (error: any) => {
        return error?.message;
      }
    }
  );

  return {
    preloadResetPassword: data,
    preloadResetPasswordError: error?.message ? error.message : undefined,
    preloadResetPasswordLoading: isLoading,
    preloadResetPasswordSuccess: isSuccess
  };
}
