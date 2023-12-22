import { useState } from "react";

export default function ReTodoList() {
  const [dailyReTodos, setDailyReTodos] = useState([
    { id: "1", title: "trash", status: true },
    { id: "2", title: "plants", status: false },
  ]);

  const handleCheckboxChange = (retodo: string) => {
    console.log(retodo);
    setDailyReTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === retodo ? { ...todo, status: !todo.status } : todo
      )
    );
  };

  const handleDelete = async (todoId: string) => {
    setDailyReTodos((prevTodos) =>
      prevTodos.filter((item) => item.id !== todoId)
    );
  };

  return (
    <>
      <ul className="divide-y divide-gray-200 px-4">
        {dailyReTodos.map((retodo) => (
          <li className="py-4 flex justify-center h-14" key={retodo.id}>
            <div className="flex items-center w-full">
              <input
                id={retodo.id}
                name={retodo.id}
                type="checkbox"
                checked={retodo.status}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                onChange={() => handleCheckboxChange(retodo.id)}
              />
              <label
                htmlFor={retodo.id}
                className={`ml-3 block text-gray-900 ${
                  retodo.status ? "line-through text-gray-500" : ""
                }`}
              >
                <span className="text-lg font-medium">{retodo.title}</span>
              </label>
              {retodo.status && (
                <button
                  className="ml-auto text-white bg-red-500 px-2 py-1 rounded"
                  onClick={() => handleDelete(retodo.id)}
                >
                  Delete
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
