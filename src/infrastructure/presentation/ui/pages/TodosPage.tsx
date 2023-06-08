import { CreateTodoForm } from "../../todo/CreateTodoForm";
import { TodoList } from "../../todo/TodoList";
import { Layout } from "../components/Layout";

export function TodosPage() {
  return (
    <Layout>
      <main>
        <h1>Todo List</h1>
        <TodoList />
        <CreateTodoForm />
      </main>
    </Layout>
  );
}
