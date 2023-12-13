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

  const saveTodos = async (newTodo: TodoItem) => {
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
      await saveTodos(newTodo);

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
    <form onSubmit={handleSubmit} className="w-full max-w-sm mx-auto px-4 py-2">
      <div className="flex items-center border-b-2 border-indigo-500 py-2">
        <input
          type="text"
          value={todoItem}
          onChange={handleChange}
          placeholder="Enter Something"
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
        />
        <button
          type="submit"
          className="flex-shrink-0 bg-indigo-500 hover:bg-indigo-700 border-indigo-500 hover:border-indigo-700 text-sm border-4 text-white py-1 px-2 rounded"
        >
          Add
        </button>
      </div>
      {error && (
        <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
          {error}
        </span>
      )}
    </form>
  );
}
