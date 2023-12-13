import { useState, useEffect } from "react";
import { supabase } from "../../supabaseClient";
import { Subscription } from "@supabase/supabase-js";

import Navbar from "../components/Navbar";
import InputForm from "../components/InputForm";
import TodoList from "../components/TodoList";

import { TodoItem } from "../ts/interfaces/App.interfaces";

const Home: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  useEffect(() => {
    // Fetch initial data
    getTodos();

    // Subscribe to real-time changes
    const subscription = (supabase
      .from("todos") as any)
      .on("*", () => {
        // Handle real-time updates
        getTodos();
      })
      .subscribe();

    // Cleanup subscription when component unmounts
    return () => {
      subscription.unsubscribe();
    };
  }, []); // Run once on component mount


  async function getTodos() {
    try {
      const { data, error } = await supabase.from("todos").select();

      if (error) {
        throw error;
      }

      setTodos(data ?? []);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
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
      // Optimistic update: Remove the todo immediately from local state
      setTodos((prevTodos) => prevTodos.filter((item) => item.id !== todoId));

      // Perform asynchronous delete logic using supabase
      const { error } = await supabase.from("todos").delete().eq("id", todoId);

      if (error) {
        throw new Error("Failed to delete todo");
      }

      // Handle success, e.g., log or show a success message
      console.log(`Todo with ID ${todoId} deleted successfully`);
    } catch (error) {
      // Handle errors, e.g., display an error message or log the error
      console.error("Error deleting todo:", error);
      // If there's an error, you might want to revert the optimistic update
      getTodos();
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
