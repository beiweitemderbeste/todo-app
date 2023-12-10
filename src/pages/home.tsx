import { useState } from "react";

import MainHeading from "../components/MainHeading";
import InputForm from "../components/InputForm";
import TodoList from "../components/TodoList";

import { TodoItem } from "../ts/interfaces/App.interfaces";

const Home: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([
    {
      id: "1",
      title: "clean yard",
      status: false,
    },
    {
      id: "2",
      title: "repair laptop",
      status: false,
    },
  ]);

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
      <MainHeading />
      <InputForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
};

export default Home;
