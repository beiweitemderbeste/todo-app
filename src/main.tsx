import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Dashboard from "./pages/Dashboard/Dashboard";
import ErrorPage from "./pages/Error/Error";
import ReTodoPage from "./pages/ReTodo/ReTodo";
import BacklogPage from "./pages/Backlog/Backlog";
import WaitingPage from "./pages/Waiting/Waiting";
import ClipboardPage from "./pages/Clipboard/Clipboard";
import LoginPage from "./pages/Login/Login";
import RegisterPage from "./pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/retodo",
    element: <ReTodoPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/backlog",
    element: <BacklogPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/waiting",
    element: <WaitingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/clipboard",
    element: <ClipboardPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
