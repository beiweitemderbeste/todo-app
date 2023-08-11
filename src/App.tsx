import { useState } from "react";
import styled from "styled-components";

import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";

import { TodoItem } from "./ts/interfaces/App.interfaces";

const App: React.FC = () => {
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
    <>
      <StyledH1>React Todo App</StyledH1>
      <InputForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </>
  );
}

export default App;

const StyledH1 = styled.h1`
  font-family: monospace;
`;
