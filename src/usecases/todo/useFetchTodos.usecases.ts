import { useQuery } from "@tanstack/react-query";
import { TodoM } from "../../domain/models/todo";
import { useCasesProxy } from "../../infrastructure/usecases-proxy/usecases-proxy";


export const useFetchTodos = () => {
  const { todoRepository } = useCasesProxy()
  const { data, isLoading } = useQuery<TodoM[]>({
    queryKey: ["todos"],
    queryFn: () => todoRepository.getTodos(),
  });

  return {
    todos: data?.slice(-10),
    isFetchTodosLoading: isLoading,
  };
};
