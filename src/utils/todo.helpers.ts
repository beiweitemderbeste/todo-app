import { supabase } from "../../supabaseClient";

import { TodoItem } from "../ts/interfaces/TodoItem.interface";

export const saveTodo = async (newTodo: TodoItem) => {
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