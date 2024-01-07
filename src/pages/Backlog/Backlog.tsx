import { useState, useEffect } from "react";
import { supabase } from "../../../supabaseClient";
import { Session } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";

import { getBacklogTodos, saveToBacklog } from "../../utils/backlog.helpers";

import Navbar from "../../components/layout/navigation/Navbar/Navbar";
import TodoListTable from "../../components/TodoList/TodoListTable";

import type { TodoItem } from "../../ts/interfaces/TodoList/TodoItem.interface";

function Backlog() {
  const [session, setSession] = useState<Session | null>(null);
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    async function fetchData() {
      const data = await getBacklogTodos();
      setTodos(data);
    }

    fetchData();

    if (!session) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Navbar />
      <TodoListTable
        tableHeading="backlog"
        todos={todos}
        setTodos={setTodos}
        saveToDatabase={saveToBacklog}
      />
    </>
  );
}

export default Backlog;
