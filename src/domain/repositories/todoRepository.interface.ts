import { TodoM } from '../models/todo'

export interface ITodoRepository {
  getTodos(): Promise<TodoM[]>
  clearTodos(): Promise<void>
  createTodo(todo: Omit<TodoM, 'id'>): Promise<TodoM>
}
