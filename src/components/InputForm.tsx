import { useState } from "react";
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
      <div>
        <input
          type="text"
          value={todoItem}
          onChange={handleChange}
          placeholder="Enter Something"
        />
        <button type="submit">Add</button>
        {error && <span>{error}</span>}
      </div>
    </form>
  );
}
