import { useState, useEffect } from "react";
import { supabase } from "../../../supabaseClient";
import { Session } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";

import Navbar from "../../components/layout/navigation/Navbar/Navbar";

function Waiting() {
  const [session, setSession] = useState<Session | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    if (!session) {
      navigate("/login");
    }
  }, [navigate, session]);

  return (
    <>
      <Navbar />
      <h1>hello from waiting page</h1>
    </>
  );
}

export default Waiting;
