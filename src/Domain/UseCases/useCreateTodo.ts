import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TodoRepositoryImpl } from "../../Data/Repositories/TodoRepositoryImpl";
import { Todo } from "../../Domain/Models/Todo";
import { useLogger } from "../../Infrastructure/Services/useLogger";
import { useNotification } from "../../Infrastructure/Services/useNotification";

export const useCreateTodo = (repository: TodoRepositoryImpl) => {
  const logger = useLogger();
  const notify = useNotification();
  const queryClient = useQueryClient();

  const createTodo = useMutation({
    mutationFn: (todo: Omit<Todo, "id">) => repository.createTodo(todo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      notify.success("Created Correctly!");
    },
    onError: () => {
      logger.error("Something goes wrong..");
    },
  });

  return createTodo;
};
