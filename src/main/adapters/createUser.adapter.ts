import { useMutation, useQueryClient } from 'react-query';
import { UserRepository } from 'src/data/repositories/user.repository';
import { CreateUserUseCase } from 'src/data/usecases/user/createUser.usecases';
import { ICreateUserUseCase } from 'src/domain/usecases/user/createUser.interface';
import { HttpService } from 'src/infrastructure/services/http.service';

export const useCreateUserAdapter = () => {
  const useCase = new CreateUserUseCase(new UserRepository(new HttpService()));
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutation(
    async (params: ICreateUserUseCase.Params) => {
      const user = await useCase.execute(params);
      return user;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('users');
        alert('Usuário criado com sucesso');
      },
      onError: (error: any) => {
        alert(error.message);
      }
    }
  );

  return {
    userCreate: mutateAsync
  };
};
