import { useMutation } from 'react-query';
import { AuthRepository } from 'src/data/repositories/auth.repository';
import { SignUpUseCase } from 'src/data/usecases/auth/signup.usecase';
import { TSignUpUseCase } from 'src/domain/usecases/auth/signup.interface';
import { HttpService } from 'src/infrastructure/services/http.service';

export const useSignUpAdapter = () => {
  const useCase = new SignUpUseCase(new AuthRepository(new HttpService()));

  const { mutateAsync, error, isSuccess, isLoading } = useMutation(
    async (params: TSignUpUseCase.Params) => {
      await useCase.execute(params);
    },
    {
      onError: (error: any) => {
        return error?.message;
      }
    }
  );

  return {
    signup: mutateAsync,
    signupError: error?.message ? error.message : undefined,
    signupSuccess: isSuccess,
    signupLoading: isLoading
  };
};
