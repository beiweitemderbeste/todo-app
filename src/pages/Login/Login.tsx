import { FormEvent, useState } from "react";
import { supabase } from "../../../supabaseClient";

import Navbar from "../../components/layout/navigation/Navbar/Navbar";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const { error } = await supabase.auth.signInWithOtp({ email });

      if (error) {
        setMsg(error.message);
      } else {
        setMsg("Check your emails now!");
      }
    } catch (error: any) {
      setMsg(error.error_description || error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto flex items-center justify-center mt-20">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md bg-white p-8 rounded shadow-md"
        >
          <div className="flex justify-center">
            <label
              htmlFor="email"
              className="block text-indigo-500 text-lg font-semibold mb-4"
            >
              enter your email to get a login link
            </label>
          </div>
          <input
            id="email"
            className="w-full mb-4 py-2 px-4 border border-gray-300 rounded focus:outline-none focus:ring focus:border-indigo-300"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="mx-auto bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300"
            >
              Get Magic Link
            </button>
          </div>
        </form>
        <p className="text-red-500 ml-2">{msg}</p>
      </div>
    </>
  );
};

export default Login;
