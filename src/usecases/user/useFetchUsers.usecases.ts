import { useQuery } from '@tanstack/react-query'
import { UserM } from '../../domain/models/user'
import { useCasesProxy } from '../../infrastructure/usecases-proxy/usecases-proxy'

export const useFetchUsers = () => {
  const { userRepository } = useCasesProxy()
  const { data, isLoading, isError, isSuccess } = useQuery<UserM[]>({
    queryKey: ['users'],
    queryFn: () => userRepository.getUsers(),
  })

  return {
    users: data,
    isFetchUsersLoading: isLoading,
    isFetchUsersSuccess: isSuccess,
    isFetchUsersError: isError,
  }
}
