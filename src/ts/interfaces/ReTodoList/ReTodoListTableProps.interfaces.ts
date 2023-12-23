import type { TodoItem } from "../TodoList/TodoItem.interface";

interface ReTodoListTableProps {
  tableHeading: string;
  todos: TodoItem[];
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>;
  handleDelete: (todoId: string, setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>) => void; 
  saveToDatabase: (newTodo: TodoItem) => Promise<void>; 
}

export type { ReTodoListTableProps };
