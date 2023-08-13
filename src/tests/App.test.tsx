import { render, screen } from "@testing-library/react";
import App from "../App";

describe('Simple working test', () => {
  it('the title is visible', () => {
    render(<App />)
    expect(screen.getByText(/React Todo App/i)).toBeInTheDocument()
  })
})