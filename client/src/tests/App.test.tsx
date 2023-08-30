import { render, screen } from "@testing-library/react";
import App from "../App";

it("tests if the title is visible", () => {
  render(<App />);
  expect(screen.getByText(/React Todo App/i)).toBeInTheDocument();
});
