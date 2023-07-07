import { useMutation } from 'react-query';
import { AuthRepository } from 'src/data/repositories/auth.repository';
import { ResetPasswordUseCase } from 'src/data/usecases/auth/reset-password.usecase';
import { TResetPasswordUseCase } from 'src/domain/usecases/auth/reset-password.interface';
import { HttpService } from 'src/infrastructure/services/http.service';

export function useResetPasswordAdapter() {
  const useCase = new ResetPasswordUseCase(
    new AuthRepository(new HttpService())
  );

  const { mutateAsync, error, isLoading, isSuccess } = useMutation(
    async (params: TResetPasswordUseCase.Params) => {
      await useCase.execute(params);
    },
    {
      onError: (error: any) => {
        return error?.message;
      }
    }
  );

  return {
    resetPassword: mutateAsync,
    resetPasswordError: error?.message ? error.message : undefined,
    resetPasswordLoading: isLoading,
    resetPasswordSuccess: isSuccess
  };
}
