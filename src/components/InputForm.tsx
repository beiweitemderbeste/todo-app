import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { supabase } from "../../supabaseClient";

import { InputFormProps } from "../ts/interfaces/InputForm.interfaces";
import { TodoItem } from "../ts/interfaces/App.interfaces";

export default function InputForm({ todos, setTodos }: InputFormProps) {
  const [todoItem, setTodoItem] = useState("");
  const [error, setError] = useState("");

  const validateInput = (inputValue: string) => {
    if (inputValue.trim() === "") {
      return "Input cannot be empty.";
    } else if (inputValue.length < 4 || inputValue.length > 20) {
      return "Your input must be between 4 and 20 characters.";
    }
    return "";
  };

  const saveTodo = async (newTodo: TodoItem) => {
    try {
      const { data, error } = await supabase.from("todos").upsert([
        {
          id: newTodo.id,
          title: newTodo.title,
          status: newTodo.status,
        },
      ]);

      if (error instanceof Error) {
        console.error("Error saving todo to database:", error.message);
      } else {
        console.log("Todo saved successfully to database:", data);
      }
    } catch (error) {
      console.error("Error saving todo to database:", error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setTodoItem(inputValue);
    setError(validateInput(inputValue));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const inputError = validateInput(todoItem);

    if (inputError === "") {
      const newTodo: TodoItem = {
        id: uuidv4(),
        title: todoItem,
        status: false,
      };

      // Save the new todo to the database
      await saveTodo(newTodo);

      // Update the local state with the new todo
      setTodos([...todos, newTodo]);

      // Reset form state
      setTodoItem("");
      setError("");
    } else {
      setError(inputError);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="input-form-container p-4 border-b-2 border-gray-300"
    >
      <input
        type="text"
        value={todoItem}
        onChange={handleChange}
        placeholder="Enter Something"
        className="input-field"
      />
      <button type="submit" className="add-button">
        Add
      </button>
      {error && <span className="text-red-500 text-xs mt-1 ml-1">{error}</span>}
    </form>
  );
}
