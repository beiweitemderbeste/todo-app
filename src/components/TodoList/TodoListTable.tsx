import TodoListHeading from "./TodoListHeading";
import TodoList from "./TodoList";
import InputForm from "../forms/InputForm/InputForm";

import type { TodoListTableProps } from "../../ts/interfaces/TodoList/TodoListTableProps.interfaces";

const TodoListTable: React.FC<TodoListTableProps> = ({
  tableHeading,
  todos,
  setTodos,
  saveToDatabase
}: TodoListTableProps) => {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
      <TodoListHeading tableHeading={tableHeading} />
      <InputForm todos={todos} setTodos={setTodos} saveToDatabase={saveToDatabase} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default TodoListTable;
