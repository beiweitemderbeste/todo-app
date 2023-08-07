import { useState } from "react";

export default function InputForm() {
  const [todoItem, setTodoItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Form submitted: ${todoItem}`);
    setTodoItem("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value="Enter Something"
        onChange={(e) => setTodoItem(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
