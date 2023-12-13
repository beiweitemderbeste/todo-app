import { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";

import Navbar from "../components/Navbar";
import InputForm from "../components/InputForm";
import TodoList from "../components/TodoList";

import { TodoItem } from "../ts/interfaces/App.interfaces";

const Home: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
    getTodos();
  }, []);

  async function getTodos() {
    const { data } = await supabase.from("todos").select();
    setTodos(data ?? []);
  }

  const handleCheckboxChange = (todoId: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, status: !todo.status } : todo
      )
    );
  };

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
        <InputForm todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} handleCheckboxChange={handleCheckboxChange} />
      </div>
    </>
  );
};

export default Home;
