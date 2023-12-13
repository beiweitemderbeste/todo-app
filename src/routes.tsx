import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/home";
import ErrorPage from "./pages/error";

const routes: React.ReactElement = (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/home" element={<HomePage />} />
    <Route path="*" element={<ErrorPage />} />
  </Routes>
);

export default routes;
