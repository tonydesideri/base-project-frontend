import { ITodoDataSource } from '../../domain/dataSources/todoDataSource.interface'
import { TodoM } from '../../domain/models/todo'
import { Http } from '../services/http'

export class TodoDataSource implements ITodoDataSource {
  async getTodos() {
    const res = await Http.get<TodoM[]>('/todos')
    return res.data
  }

  async createTodo(todo: Omit<TodoM, 'id'>) {
    const res = await Http.post<TodoM>('/todos', todo)
    return res.data
  }

  /**
   * The massive delete is not available in those APIs
   */
  async clearTodos() {
    return new Promise<void>((resolve) => resolve())
  }
}
