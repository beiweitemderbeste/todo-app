import { useState, useEffect } from "react";

import { getTodos } from "../../utils/todo.helpers";

import Navbar from "../../components/layout/navigation/Navbar/Navbar";
import TodoListTable from "../../components/TodoList/TodoListTable";

import type { TodoItem } from "../../ts/interfaces/TodoList/TodoItem.interface";

function Backlog() {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getTodos();
      setTodos(data);
    }

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <TodoListTable tableHeading="backlog" todos={todos} setTodos={setTodos} />
    </>
  );
}

export default Backlog;
