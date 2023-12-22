import type { TodoItem } from "../TodoList/TodoItem.interface";

interface ReTodoListProps {
  todos: TodoItem[];
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

export type { ReTodoListProps };