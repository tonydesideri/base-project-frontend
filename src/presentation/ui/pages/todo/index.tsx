import { Layout } from '../../components/Layout'
import { CreateTodoForm } from './components/CreateTodoForm'
import { TodoList } from './components/TodoList'

export default function TodosPage() {
  return (
    <Layout>
      <main>
        <h1>Todo List</h1>
        <TodoList />
        <CreateTodoForm />
      </main>
    </Layout>
  )
}
