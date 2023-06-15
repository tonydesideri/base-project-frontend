import { useMutation, useQueryClient } from 'react-query'
import { UserRepository } from 'src/data/repository/user.repository'
import { CreateUserUseCase } from 'src/data/usecases/user/createUser.usecases'
import { UserM } from 'src/domain/models/user'
import { HttpService } from 'src/infrastructure/services/http.service'

export const useCreateUserAdapter = () => {
  const useCase = new CreateUserUseCase(new UserRepository(new HttpService()))
  const queryClient = useQueryClient()
  const { mutateAsync } = useMutation(
    async (data: UserM) => {
      const user = await useCase.execute(data.email, data.password)
      // Você pode lidar com os resultados do caso de uso aqui (por exemplo, retornar uma mensagem de erro ou redirecionar para uma página)
      return user
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('users')
      },
    },
  )

  return {
    userCreate: mutateAsync,
  }
}
