import { TodoListProps } from "../ts/interfaces/App.interfaces";

export default function TodoList({ todos }: TodoListProps) {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
