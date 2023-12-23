import { supabase } from "../../supabaseClient";

import { TodoItem } from "../ts/interfaces/TodoList/TodoItem.interface";

export const getDailyTodos = async () => {
  try {
    const { data } = await supabase.from("daily_todo").select();
    return data ?? [];
  } catch (error) {
    console.error("Error fetching todos:", error);
    return [];
  }
};

export const saveToDailyTodos = async (newTodo: TodoItem) => {
  try {
    const { data, error } = await supabase.from("daily").upsert([
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

export const deleteDailyTodo = async (todoId: string) => {
  try {
    const { error } = await supabase.from("daily_todo").delete().eq("id", todoId);

    if (error) {
      throw new Error("Failed to delete todo");
    }

    console.log(`Todo with ID ${todoId} deleted successfully`);
  } catch (error) {
    console.error("Error deleting todo:", error);
  }
};

export const handleDailyDelete = async (
  todoId: string,
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>
) => {
  await deleteDailyTodo(todoId);
  setTodos((prevTodos) => prevTodos.filter((item) => item.id !== todoId));
};

export const handleCheckboxChange = (
  todoId: string,
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>
) => {
  setTodos((prevTodos) =>
    prevTodos.map((todo) =>
      todo.id === todoId ? { ...todo, status: !todo.status } : todo
    )
  );
};