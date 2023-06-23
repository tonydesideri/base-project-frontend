import { useMutation } from 'react-query';
import { AuthRepository } from 'src/data/repositories/auth.repository';
import { ForgotPasswordUseCase } from 'src/data/usecases/auth/forgotPassword.usecase';
import { TForgotPasswordUseCase } from 'src/domain/usecases/auth/forgotPassword.interface';
import { HttpService } from 'src/infrastructure/services/http.service';

export function useForgotPasswordAdapter() {
  const useCase = new ForgotPasswordUseCase(
    new AuthRepository(new HttpService())
  );

  const { mutateAsync, isError, isLoading, isSuccess } = useMutation(
    async (params: TForgotPasswordUseCase.Params) => {
      await useCase.execute(params);
    },
    {
      onError: (error: any) => {
        alert(error.message);
      }
    }
  );

  return {
    forgotPassword: mutateAsync,
    isError,
    isLoading,
    isSuccess
  };
}
