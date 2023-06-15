import { useFetchTodos } from '../../../../../data/usecases/todo/useFetchTodos.usecases'

export function TodoList() {
  const { todos, isFetchTodosLoading } = useFetchTodos()

  return (
    <fieldset>
      <legend>Todo List</legend>

      {isFetchTodosLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {todos && todos.length === 0 ? (
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
  )
}
