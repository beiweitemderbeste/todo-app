import type { TodoItem } from "./TodoItem.interface";

interface TodoListTableProps {
  tableHeading: string;
  todos: TodoItem[];
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
}

export type { TodoListTableProps };
