import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "./Navbar";

test("navigates to DASHBOARD when Dashboard link is clicked", () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Navbar />
    </MemoryRouter>
  );

  const dashboardLink = screen.getByRole("link", { name: "DASHBOARD" });
  fireEvent.click(dashboardLink);
  expect(window.location.pathname).toBe("/");
});
