import { TodoItem } from "../TodoList/TodoItem.interface";

interface InputFormProps {
  todos: TodoItem[];
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

export type { InputFormProps };
