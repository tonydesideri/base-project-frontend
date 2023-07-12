import { useMutation } from 'react-query';
import { UserRepository } from 'src/data/repositories/user.repository';
import { ResendConfirmationEmailUseCase } from 'src/data/usecases/user/resend-confirmation-email.usecase';
import { TResendConfirmationEmailUseCase } from 'src/domain/usecases/user/resend-confirmation-email.interface';
import { HttpService } from 'src/infrastructure/services/http.service';

export const useResendConfirmationEmailAdapter = () => {
  const useCase = new ResendConfirmationEmailUseCase(
    new UserRepository(new HttpService())
  );

  const { mutateAsync, error, isSuccess, isLoading } = useMutation(
    async (params: TResendConfirmationEmailUseCase.Params) => {
      await useCase.execute(params);
    },
    {
      onError: (error: any) => {
        return error?.message;
      }
    }
  );

  return {
    resendConfirmationEmail: mutateAsync,
    resendConfirmationEmailError: error?.message ? error.message : undefined,
    resendConfirmationEmailSuccess: isSuccess,
    resendConfirmationEmailLoading: isLoading
  };
};
