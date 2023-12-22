import { ReTodoListProps } from "../../ts/interfaces/ReTodoList/ReTodoListProps.interfaces";

export default function ReTodoList({ todos, setTodos }: ReTodoListProps) {
  const handleCheckboxChange = (todoId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) =>
        prevTodo.id === todoId ? { ...prevTodo, status: e.target.checked } : prevTodo
      )
    );
  };

  const handleDelete = async (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== todoId));
  };

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
                onChange={(e) => handleCheckboxChange(todo.id, e)}
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
                  onClick={() => handleDelete(todo.id)}
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
