import { useState } from "react";

import Navbar from "../../components/layout/navigation/Navbar/Navbar";
import ReTodoListTable from "../../components/ReTodoList/ReTodoListTable";

function ReTodo() {
  const [dailyReTodos, setDailyReTodos] = useState([
    { id: "1", title: "remove trash", status: true },
    { id: "2", title: "do dishes", status: false },
  ]);

  const [weeklyReTodos, setWeeklyReTodos] = useState([
    { id: "1", title: "water plants", status: false },
  ]);

  const [monthlyReTodos, setMonthlyReTodos] = useState([
    { id: "1", title: "pay bills", status: false },
  ]);

  return (
    <>
      <Navbar />
      <ReTodoListTable tableHeading="Daily" todos={dailyReTodos} setTodos={setDailyReTodos} />
      <ReTodoListTable tableHeading="Weekly" todos={weeklyReTodos} setTodos={setWeeklyReTodos} />
      <ReTodoListTable tableHeading="Monthly" todos={monthlyReTodos} setTodos={setMonthlyReTodos} />
    </>
  );
}

export default ReTodo;
