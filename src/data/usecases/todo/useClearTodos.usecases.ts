import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNotification } from '../../../infrastructure/services/useNotification'
import { useCasesProxy } from '../../../main/usecases-proxy/usecases-proxy'

export const useClearTodos = () => {
  const { todoRepository } = useCasesProxy()
  const notify = useNotification()
  const queryClient = useQueryClient()
  const clearTodos = useMutation({
    mutationFn: () => todoRepository.clearTodos(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
      notify.success('Cleared Correctly!')
    },
  })

  return clearTodos
}
