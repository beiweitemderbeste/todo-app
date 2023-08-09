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
      <FormContainer>
        <InputField
          type="text"
          value={todoItem}
          onChange={handleChange}
          placeholder="Enter Something"
        />
        <StyledButton type="submit">Add</StyledButton>
      </FormContainer>
    </form>
  );
}

const FormContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const InputField = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  outline: none;
`;

const StyledButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
`;
