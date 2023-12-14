import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Dashboard from "./pages/dashboard";
import ErrorPage from "./pages/error";
import DailyPage from "./pages/daily";
import BacklogPage from "./pages/backlog";
import WaitingPage from "./pages/waiting";

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
    path: "/daily",
    element: <DailyPage />,
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
    path: "*",
    element: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
