import { useQuery } from 'react-query'
import { UserRepository } from 'src/data/repository/user.repository'
import { FetchUsersUseCase } from 'src/data/usecases/user/fetchUsers.usecases'
import { UserM } from 'src/domain/models/user'
import { HttpService } from 'src/infrastructure/services/http.service'

export const useFetchUsersAdapter = () => {
  const useCase = new FetchUsersUseCase(new UserRepository(new HttpService()))

  const { data, isLoading, isError, isSuccess } = useQuery<UserM[] | undefined>(
    {
      queryKey: 'users',
      queryFn: async () => await useCase.execute(),
    },
  )

  return {
    users: data,
    isFetchUsersLoading: isLoading,
    isFetchUsersSuccess: isSuccess,
    isFetchUsersError: isError,
  }
}
