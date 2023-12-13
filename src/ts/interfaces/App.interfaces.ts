interface TodoItem {
  id: string;
  title: string;
  status: boolean;
}

export type { TodoItem };

interface TodoListProps {
  todos: TodoItem[];
  handleCheckboxChange: (todoId: string) => void;
}

export type { TodoListProps };
