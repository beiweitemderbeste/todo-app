import type { TodoItem } from "../TodoList/TodoItem.interface";

interface ReTodoListTableProps {
  tableHeading: string;
  todos: TodoItem[];
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
  handleDelete: (todoId: string, setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>) => void; 
}

export type { ReTodoListTableProps };
