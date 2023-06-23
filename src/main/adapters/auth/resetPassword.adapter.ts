import { useMutation } from 'react-query';
import { AuthRepository } from 'src/data/repositories/auth.repository';
import { ResetPasswordUseCase } from 'src/data/usecases/auth/resetPassword.usecase';
import { TResetPasswordUseCase } from 'src/domain/usecases/auth/resetPassword.interface';
import { HttpService } from 'src/infrastructure/services/http.service';

export function useResetPasswordAdapter() {
  const useCase = new ResetPasswordUseCase(
    new AuthRepository(new HttpService())
  );

  const { mutateAsync, isError, isLoading, isSuccess } = useMutation(
    async (params: TResetPasswordUseCase.Params) => {
      await useCase.execute(params);
    },
    {
      onError: (error: any) => {
        alert(error.message);
      }
    }
  );

  return {
    resetPassword: mutateAsync,
    isError,
    isLoading,
    isSuccess
  };
}
