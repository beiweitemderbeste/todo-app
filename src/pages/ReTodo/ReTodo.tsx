import { useState } from "react";

import Navbar from "../../components/layout/navigation/Navbar/Navbar";
import ReTodoListTable from "../../components/ReTodoList/ReTodoListTable";

import type { TodoItem } from "../../ts/interfaces/TodoList/TodoItem.interface";
import { handleDailyDelete, handleWeeklyDelete, handleMonthlyDelete } from "../../utils/retodos.helpers";

function ReTodo() {
  const [dailyReTodos, setDailyReTodos] = useState<TodoItem[]>([
    { id: "1", title: "remove trash", status: true },
    { id: "2", title: "do dishes", status: false },
  ]);

  const [weeklyReTodos, setWeeklyReTodos] = useState<TodoItem[]>([
    { id: "1", title: "water plants", status: false },
  ]);

  const [monthlyReTodos, setMonthlyReTodos] = useState<TodoItem[]>([
    { id: "1", title: "pay bills", status: false },
  ]);

  return (
    <>
      <Navbar />
      <ReTodoListTable
        tableHeading="Daily"
        todos={dailyReTodos}
        setTodos={setDailyReTodos}
        handleDelete={handleDailyDelete}
      />
      <ReTodoListTable
        tableHeading="Weekly"
        todos={weeklyReTodos}
        setTodos={setWeeklyReTodos}
        handleDelete={handleWeeklyDelete}
      />
      <ReTodoListTable
        tableHeading="Monthly"
        todos={monthlyReTodos}
        setTodos={setMonthlyReTodos}
        handleDelete={handleMonthlyDelete}
      />
    </>
  );
}

export default ReTodo;
