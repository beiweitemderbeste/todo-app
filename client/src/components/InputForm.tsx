import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

import { InputFormProps } from "../ts/interfaces/InputForm.interfaces";
import { TodoItem } from "../ts/interfaces/App.interfaces";

export default function InputForm({ todos, setTodos }: InputFormProps) {
  const [todoItem, setTodoItem] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setTodoItem(inputValue);
    if (inputValue.length < 4 || inputValue.length > 20) {
      setError("length must be between 4 and 20 characters.");
    } else {
      setError("");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodoItem(todoItem);
  };

  const addTodoItem = (todo: string) => {
    if (todo.trim() === "") {
      setError("Your input must be between 4 and 20 characters.");
    } else if (todoItem.length < 4 || todoItem.length > 20) {
      setError("Your input must be between 4 and 20 characters.");
    } else {
      const newTodo: TodoItem = {
        id: uuidv4(),
        title: todo,
        status: false,
      };
      setTodos([...todos, newTodo]);
      setTodoItem("");
      setError("");
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
        {error && <ErrorMessage>{error}</ErrorMessage>}
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

const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
  margin-top: 8px;
  display: block;
  background-color: #ffe0e0;
  padding: 4px 8px;
  border-radius: 4px;
`;
