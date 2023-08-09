import { useState } from "react";
import styled from "styled-components";

import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "clean yard",
      status: false,
    },
    {
      id: 2,
      title: "repair laptop",
      status: false,
    },
  ]);np

  return (
    <>
      <StyledH1>React Todo App</StyledH1>
      <InputForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;

const StyledH1 = styled.h1`
  font-family: monospace;
`;
