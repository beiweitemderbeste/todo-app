import { TodoItem } from "./TodoItem.interface";

interface InputFormProps {
  todos: TodoItem[];
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

export type { InputFormProps };

