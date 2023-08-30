interface TodoItem {
  id: string;
  title: string;
  status: boolean;
}

export type { TodoItem };

interface TodoListProps {
  todos: TodoItem[];
}

export type { TodoListProps };
