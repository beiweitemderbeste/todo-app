import { useState, useEffect } from "react";

import Navbar from "../../components/layout/navigation/Navbar/Navbar";
import ReTodoListTable from "../../components/ReTodoList/ReTodoListTable";

import type { TodoItem } from "../../ts/interfaces/TodoList/TodoItem.interface";
import { getDailyTodos, getWeeklyTodos, getMonthlyTodos, handleDailyDelete, handleWeeklyDelete, handleMonthlyDelete } from "../../utils/retodos.helpers";

function ReTodo() {
  const [dailyReTodos, setDailyReTodos] = useState<TodoItem[]>([]);
  const [weeklyReTodos, setWeeklyReTodos] = useState<TodoItem[]>([]);
  const [monthlyReTodos, setMonthlyReTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getDailyTodos();
      setDailyReTodos(data);

      const weeklyData = await getWeeklyTodos();
      setWeeklyReTodos(weeklyData);

      const monthlyData = await getMonthlyTodos();
      setMonthlyReTodos(monthlyData);
    }

    fetchData();
  }, []);

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
