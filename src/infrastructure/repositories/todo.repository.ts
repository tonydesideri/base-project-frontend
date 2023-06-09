import { ITodoDataSource } from '../../domain/dataSources/todoDataSource.interface'
import { TodoM } from '../../domain/models/todo'
import { ITodoRepository } from '../../domain/repositories/todoRepository.interface'

export class TodoRepository implements ITodoRepository {
  datasource: ITodoDataSource

  constructor(datasource: ITodoDataSource) {
    this.datasource = datasource
  }

  async getTodos(): Promise<TodoM[]> {
    return await this.datasource.getTodos()
  }

  async createTodo(todo: Omit<TodoM, 'id'>): Promise<TodoM> {
    return this.datasource.createTodo(todo)
  }

  async clearTodos(): Promise<void> {
    return await this.datasource.clearTodos()
  }
}
