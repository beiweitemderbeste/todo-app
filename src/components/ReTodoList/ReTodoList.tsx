import { useState } from "react";

export default function ReTodoList() {
  const [dailyReTodos, setDailyReTodos] = useState([
    { id: "1", title: "trash", status: false },
    { id: "2", title: "plants", status: false },
  ]);

  return (
    <>
      <ul className="divide-y divide-gray-200 px-4">
        {dailyReTodos.map((retodo) => (
          <li className="py-4 flex justify-center h-14" key={retodo.id}>
            <span className="text-lg font-medium">{retodo.title}</span>
          </li>
        ))}
      </ul>
    </>
  );
}
