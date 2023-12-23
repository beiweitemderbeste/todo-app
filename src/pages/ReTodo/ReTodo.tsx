import { useState, useEffect } from "react";

import Navbar from "../../components/layout/navigation/Navbar/Navbar";
import ReTodoListTable from "../../components/ReTodoList/ReTodoListTable";

import type { TodoItem } from "../../ts/interfaces/TodoList/TodoItem.interface";
import {
  getDailyTodos,
  saveToDailyTodos,
  handleDailyDelete,
  getWeeklyTodos,
  saveToWeeklyTodos,
  handleWeeklyDelete,
  getMonthlyTodos,
  saveToMonthlyTodos,
  handleMonthlyDelete,
} from "../../utils/retodos.helpers";

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
      <div className="px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="mb-8 md:mb-0">
            <ReTodoListTable
              tableHeading="Daily"
              todos={dailyReTodos}
              setTodos={setDailyReTodos}
              handleDelete={handleDailyDelete}
              saveToDatabase={saveToDailyTodos}
            />
          </div>
          <div className="mb-8 md:mb-0">
            <ReTodoListTable
              tableHeading="Weekly"
              todos={weeklyReTodos}
              setTodos={setWeeklyReTodos}
              handleDelete={handleWeeklyDelete}
              saveToDatabase={saveToWeeklyTodos}
            />
          </div>
          <div className="mb-8 md:mb-0">
            <ReTodoListTable
              tableHeading="Monthly"
              todos={monthlyReTodos}
              setTodos={setMonthlyReTodos}
              handleDelete={handleMonthlyDelete}
              saveToDatabase={saveToMonthlyTodos}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ReTodo;
