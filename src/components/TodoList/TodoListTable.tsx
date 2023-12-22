import { useState, useEffect } from "react";

import { deleteTodo, getTodos } from "../../utils/todo.helpers";

import TodoListHeading from "./TodoListHeading";
import TodoList from "./TodoList";
import InputForm from "../forms/InputForm/InputForm";

import type { TodoItem } from "../../ts/interfaces/TodoList/TodoItem.interface";

export default function TodoListTable({
  tableHeading,
}: {
  tableHeading: string;
}) {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getTodos();
      setTodos(data);
    }

    fetchData();
  }, []);

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
      <TodoListHeading tableHeading={tableHeading} />
      <InputForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} deleteTodo={deleteTodo} />
    </div>
  );
}
