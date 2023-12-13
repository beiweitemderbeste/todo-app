import { TodoListProps } from "../ts/interfaces/App.interfaces";

export default function TodoList({
  todos,
  handleCheckboxChange,
  deleteTodo,
}: TodoListProps) {
  return (
    <ul className="todo-list divide-y divide-gray-200 px-4">
      {todos.map((todo) => (
        <li className="todo-item py-4 flex items-center" key={todo.id}>
          <input
            id={todo.id}
            name={todo.id}
            type="checkbox"
            checked={todo.status}
            className="checkbox h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            onChange={() => handleCheckboxChange(todo.id)}
          />
          <label
            htmlFor={todo.id}
            className={`todo-label ml-3 block text-gray-900 ${
              todo.status ? "line-through text-gray-500" : ""
            }`}
          >
            <span className="text-lg font-medium">{todo.title}</span>
          </label>
          {todo.status && (
            <button
              onClick={() => deleteTodo(todo.id)}
              className="delete-button ml-auto bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}
