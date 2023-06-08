import { TodoM } from "../models/todo";


export interface ITodoDataSource {
  getTodos(): Promise<TodoM[]>;
  clearTodos(): Promise<void>;
  createTodo(todo: Omit<TodoM, "id">): Promise<TodoM>;
}
