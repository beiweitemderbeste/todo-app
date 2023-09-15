import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "../App";

it("tests if the title is visible", () => {
  render(<App />);
  expect(screen.getByText(/React Todo App/i)).toBeInTheDocument();
});
