import { ITodoRepository } from 'src/domain/repositories/todoRepository.interface'
import { TodoM } from '../../domain/models/todo'
import { IHTTPService } from '../../domain/services/http.interface'

export class TodoRepository implements ITodoRepository {
  private httpService: IHTTPService

  constructor(httpService: IHTTPService) {
    this.httpService = httpService
  }

  async getTodos() {
    const res = await this.httpService.get<TodoM[]>('/todos')
    return res
  }

  async createTodo(todo: Omit<TodoM, 'id'>) {
    const res = await this.httpService.post<TodoM>('/todo', todo)
    return res
  }

  /**
   * The massive delete is not available in those APIs
   */
  async clearTodos() {
    return new Promise<void>((resolve) => resolve())
  }
}
