import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TodoRepositoryImpl } from "../../Data/Repositories/TodoRepositoryImpl";
import { useNotification } from "../../Infrastructure/Services/useNotification";

export const useClearTodos = (repository: TodoRepositoryImpl) => {
  const notify = useNotification();
  const queryClient = useQueryClient();
  const clearTodos = useMutation({
    mutationFn: () => repository.clearTodos(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      notify.success("Cleared Correctly!");
    },
  });

  return clearTodos;
};
