import { TodoLocalStorageDataSource } from "../../../Data/DataSources/Todo/TodoLocalStorageDataSource";
import { TodoRepositoryImpl } from "../../../Data/Repositories/TodoRepositoryImpl";
import { useFetchTodos } from "../../../Domain/UseCases/useFetchTodos";


export function TodoList() {
  const { todos, isFetchTodosLoading } = useFetchTodos(
    new TodoRepositoryImpl(new TodoLocalStorageDataSource())
  );

  return (
    <fieldset>
      <legend>Todo List</legend>

      {isFetchTodosLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {todos.length === 0 ? (
            <div>No available Todos.</div>
          ) : (
            <ul>
              {todos?.map((todo) => (
                <li key={todo.id}>{todo.title}</li>
              ))}
            </ul>
          )}
        </>
      )}
    </fieldset>
  );
}
