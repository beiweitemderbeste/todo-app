import { useState } from "react";

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
      setTodos([...todos, todo]);
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
      <button type="submit">Add</button>
    </form>
  );
}
