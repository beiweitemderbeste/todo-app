import { TodoListProps } from "../ts/interfaces/App.interfaces";

export default function TodoList({ todos }: TodoListProps) {
  return (
    <>
      <ul className="divide-y divide-gray-200 px-4">
        {todos.map((todo) => (
          <li className="py-4" key={todo.id}>
            <div className="flex items-center">
              <input
                id="todo1"
                name="todo1"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="todo1" className="ml-3 block text-gray-900">
                <span className="text-lg font-medium">{todo.title}</span>
              </label>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
