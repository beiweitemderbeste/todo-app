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

  async function deleteTodo(todoId: string) {
    try {
      // Perform asynchronous delete logic using supabase
      const { error } = await supabase.from("todos").delete().eq("id", todoId);
  
      if (error) {
        throw new Error('Failed to delete todo');
      }
  
      // Handle success, e.g., update state or perform any additional actions
      console.log(`Todo with ID ${todoId} deleted successfully`);
  
      // Update state after successful deletion
      setTodos((prevTodos) => prevTodos.filter((item) => item.id !== todoId));
    } catch (error) {
      // Handle errors, e.g., display an error message or log the error
      console.error('Error deleting todo:', error);
    }
  }
  
  

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
        <InputForm todos={todos} setTodos={setTodos} />
        <TodoList
          todos={todos}
          handleCheckboxChange={handleCheckboxChange}
          deleteTodo={deleteTodo}
        />
      </div>
    </>
  );
};

export default Home;
