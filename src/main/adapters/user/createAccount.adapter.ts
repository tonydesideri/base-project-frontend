import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { UserRepository } from 'src/data/repositories/user.repository';
import { CreateAccountUseCase } from 'src/data/usecases/user/createAccount.usecase';
import { TCreateAccountUseCase } from 'src/domain/usecases/user/createAccount.interface';
import { HttpService } from 'src/infrastructure/services/http.service';

export const useCreateAccountAdapter = () => {
  const useCase = new CreateAccountUseCase(
    new UserRepository(new HttpService())
  );
  const navigate = useNavigate();

  const { mutateAsync } = useMutation(
    async (params: TCreateAccountUseCase.Params) => {
      const user = await useCase.execute(params);
      return user;
    },
    {
      onSuccess: () => {
        alert('Cadastro efetuado com sucesso');
        navigate('/');
      },
      onError: (error: any) => {
        alert(error.message);
      }
    }
  );

  return {
    createAccount: mutateAsync
  };
};
