import { useMutation } from 'react-query';
import { AuthRepository } from 'src/data/repositories/auth.repository';
import { ForgotPasswordUseCase } from 'src/data/usecases/auth/forgot-password.usecase';
import { TForgotPasswordUseCase } from 'src/domain/usecases/auth/forgotPassword.interface';
import { HttpService } from 'src/infrastructure/services/http.service';

export function useForgotPasswordAdapter() {
  const useCase = new ForgotPasswordUseCase(
    new AuthRepository(new HttpService())
  );

  const { mutateAsync, error, isLoading, isSuccess } = useMutation(
    async (params: TForgotPasswordUseCase.Params) => {
      await useCase.execute(params);
    },
    {
      onError: (error: any) => {
        return error?.message;
      }
    }
  );

  return {
    forgotPassword: mutateAsync,
    forgotPasswordError: error?.message ? error.message : undefined,
    forgotPasswordLoading: isLoading,
    forgotPasswordSuccess: isSuccess
  };
}
