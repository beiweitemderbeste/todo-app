import type { TodoItem } from "./TodoItem.interface";

interface TodoListProps {
  todos: TodoItem[];
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

export type { TodoListProps };
