import { TodoItem } from "./App.interfaces";

interface InputFormProps {
  todos: TodoItem[];
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

export type { InputFormProps };

