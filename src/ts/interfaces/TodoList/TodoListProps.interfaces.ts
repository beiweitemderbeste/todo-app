import type { TodoItem } from "./TodoItem.interface";

interface TodoListProps {
  todos: TodoItem[];
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
  handleCheckboxChange: (todoId: string) => void;
  deleteTodo: (todoId: string) => void;
}

export type { TodoListProps };
