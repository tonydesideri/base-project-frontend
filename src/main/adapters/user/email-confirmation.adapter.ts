import { useMutation } from 'react-query';
import { UserRepository } from 'src/data/repositories/user.repository';
import { EmailConfirmationUseCase } from 'src/data/usecases/user/email-confirmation.usecase';
import { TEmailConfirmationUseCase } from 'src/domain/usecases/user/email-confirmation.interface';
import { HttpService } from 'src/infrastructure/services/http.service';

export const useEmailConfirmationAdapter = () => {
  const useCase = new EmailConfirmationUseCase(
    new UserRepository(new HttpService())
  );

  const { mutateAsync, error, isSuccess, isLoading } = useMutation(
    async (params: TEmailConfirmationUseCase.Params) => {
      await useCase.execute(params);
    },
    {
      onError: (error: any) => {
        return error?.message;
      }
    }
  );

  return {
    emailConfirmation: mutateAsync,
    emailConfirmationError: error?.message ? error.message : undefined,
    emailConfirmationSuccess: isSuccess,
    emailConfirmationLoading: isLoading
  };
};
