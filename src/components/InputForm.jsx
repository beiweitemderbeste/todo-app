import { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

export default function InputForm({ todos, setTodos }) {
  const [todoItem, setTodoItem] = useState("");

  const handleChange = (event) => {
    setTodoItem(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodoItem(todoItem);
  };

  const addTodoItem = (todo) => {
    if (todo.trim() !== "") {
      const newTodo = {
        id: uuidv4(),
        title: todo,
        status: false,
      };
      setTodos([...todos, newTodo]);
      setTodoItem("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoItem}
        onChange={handleChange}
        placeholder="Enter Something"
      />
      <StyledButton type="submit">Add</StyledButton>
    </form>
  );
}

const StyledButton = styled.button`
  background-color: green;
  color: white;
`;
