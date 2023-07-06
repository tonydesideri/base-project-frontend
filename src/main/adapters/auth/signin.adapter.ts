import { useMutation } from 'react-query';
import { AuthRepository } from 'src/data/repositories/auth.repository';
import { SignInUseCase } from 'src/data/usecases/auth/signin.usecase';
import { TSignInUseCase } from 'src/domain/usecases/auth/signin.interface';
import { HttpService } from 'src/infrastructure/services/http.service';

export const useSignInAdapter = () => {
  const useCase = new SignInUseCase(new AuthRepository(new HttpService()));
  // const navigate = useNavigate();

  const { mutateAsync, error, isError, isSuccess, isLoading } = useMutation(
    async (params: TSignInUseCase.Params) => {
      const user = await useCase.execute(params);
      return user;
    },
    {
      onError: (error: any) => {
        return error?.message;
      }
    }
  );

  return {
    signin: mutateAsync,
    mutateError: error?.message ? error.message : undefined,
    isError,
    signinSuccess: isSuccess,
    signinLoading: isLoading
  };
};
