import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TodoM } from "../../domain/models/todo";

import { useLogger } from "../../infrastructure/services/useLogger";
import { useNotification } from "../../infrastructure/services/useNotification";
import { useCasesProxy } from "../../infrastructure/usecases-proxy/usecases-proxy";


export const useCreateTodo = () => {
  const { todoRepository } = useCasesProxy()
  const logger = useLogger();
  const notify = useNotification();
  const queryClient = useQueryClient();

  const createTodo = useMutation({
    mutationFn: (todo: Omit<TodoM, "id">) => todoRepository.createTodo(todo),
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
