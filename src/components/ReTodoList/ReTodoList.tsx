import { handleCheckboxChange } from "../../utils/retodos.helpers";

import { ReTodoListProps } from "../../ts/interfaces/ReTodoList/ReTodoListProps.interfaces";

export default function ReTodoList({ todos, setTodos, handleDelete }: ReTodoListProps) {
  return (
    <>
      <ul className="divide-y divide-gray-200 px-4">
        {todos.map((todo) => (
          <li className="py-4 flex justify-center h-14" key={todo.id}>
            <div className="flex items-center w-full">
              <input
                id={todo.id}
                name={todo.id}
                type="checkbox"
                checked={todo.status}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                onChange={() => handleCheckboxChange(todo.id, setTodos)}
              />
              <label
                htmlFor={todo.id}
                className={`ml-3 block text-gray-900 ${
                  todo.status ? "line-through text-gray-500" : ""
                }`}
              >
                <span className="text-lg font-medium">{todo.title}</span>
              </label>
              {todo.status && (
                <button
                  className="ml-auto text-white bg-red-500 px-2 py-1 rounded"
                  onClick={() => handleDelete(todo.id, setTodos)}
                >
                  Done
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
