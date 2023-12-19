import { useState } from "react";

export default function ReTodoList() {
  const [dailyReTodos, setDailyReTodos] = useState([
    { id: 1, title: "trash", status: false },
    { id: 2, title: "plants", status: false },
  ]);

  return (
    <div>
      <h1>hello from ReTodoList component</h1>
    </div>
  );
}
