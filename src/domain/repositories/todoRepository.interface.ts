import { TodoM } from "../models/todo";

export interface ITodoRepository {
  getTodos(): Promise<TodoM[]>;
  createTodo(todo: Omit<TodoM, "id">): Promise<TodoM>;
}
