import { useState } from "react";

import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(["HTML Tutorial", "CSS Tutorial"]);

  return (
    <>
      <h1>React Todo App</h1>
      <InputForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
