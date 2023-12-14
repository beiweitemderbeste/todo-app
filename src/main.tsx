import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Dashboard from "./pages/dashboard";
import ErrorPage from "./pages/error";
import Daily from "./pages/daily";
import Backlog from "./pages/backlog";
import Waiting from "./pages/waiting";

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
    element: <Daily />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/backlog",
    element: <Backlog />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/waiting",
    element: <Waiting />,
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
