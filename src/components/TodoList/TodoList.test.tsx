import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "./TodoList";

// Mock TodoListProps
const mockTodoListProps = {
  todos: [
    { id: "1", title: "Todo 1", status: false },
    { id: "2", title: "Todo 2", status: true },
  ],
  setTodos: jest.fn(),
  handleCheckboxChange: jest.fn(),
  deleteTodo: jest.fn(),
};

test("renders todos correctly", () => {
  render(<TodoList {...mockTodoListProps} />);

  // Check if each todo is rendered
  const todoElements = screen.getAllByRole("listitem");
  expect(todoElements).toHaveLength(2);

  // Check if todo titles are displayed
  expect(screen.getByText("Todo 1")).toBeInTheDocument();
  expect(screen.getByText("Todo 2")).toBeInTheDocument();
});

test("handles checkbox change", () => {
  render(<TodoList {...mockTodoListProps} />);

  // Simulate checkbox change
  userEvent.click(screen.getByLabelText("Todo 1"));

  // Check if handleCheckboxChange is called with the correct todoId
  expect(mockTodoListProps.handleCheckboxChange).toHaveBeenCalledWith("1");
});

test("handles delete button click", () => {
  render(<TodoList {...mockTodoListProps} />);

  // Simulate delete button click
  userEvent.click(screen.getByText("Delete"));

  // Check if deleteTodo is called with the correct todoId
  expect(mockTodoListProps.deleteTodo).toHaveBeenCalledWith("1");
});
