import { fireEvent, render, screen } from "@testing-library/react";
import InputForm from "../components/InputForm";
import jest from "jest-mock";
import { InputFormProps } from "../ts/interfaces/InputForm.interfaces";
import { TodoItem } from "../ts/interfaces/App.interfaces";

it("tests if the input field is in the document", () => {
  const mockSetTodos = jest.fn();
  const mockTodos: TodoItem[] = [];

  const inputFormProps: InputFormProps = {
    todos: mockTodos,
    setTodos: mockSetTodos,
  };

  render(<InputForm {...inputFormProps} />);
  expect(screen.getByPlaceholderText("Enter Something")).toBeInTheDocument();
});

it("tests if the button is in the document", () => {
  const mockSetTodos = jest.fn();
  const mockTodos: TodoItem[] = [];

  const inputFormProps: InputFormProps = {
    todos: mockTodos,
    setTodos: mockSetTodos,
  };

  render(<InputForm {...inputFormProps} />);
  expect(screen.getByRole("button")).toBeInTheDocument();
});

it("tests adding a todo with empty input", () => {
  const mockSetTodos = jest.fn();
  const mockTodos: TodoItem[] = [];

  const inputFormProps: InputFormProps = {
    todos: mockTodos,
    setTodos: mockSetTodos,
  };

  render(<InputForm {...inputFormProps} />);
  fireEvent.click(screen.getByRole("button"));
  expect(mockSetTodos).not.toHaveBeenCalled();
});

it("tests adding a todo with non-empty input", () => {
  const mockSetTodos = jest.fn();
  const mockTodos: TodoItem[] = [];

  const inputFormProps: InputFormProps = {
    todos: mockTodos,
    setTodos: mockSetTodos,
  };

  render(<InputForm {...inputFormProps} />);
  
  const inputField = screen.getByPlaceholderText("Enter Something");
  const addButton = screen.getByRole("button");

  fireEvent.change(inputField, { target: { value: "New Task" } });
  fireEvent.click(addButton);

  expect(mockSetTodos).toHaveBeenCalledWith([
    ...mockTodos,
    { id: expect.any(String), title: "New Task", status: false },
  ]);
});

it("clears input field after adding a todo", () => {
  const mockSetTodos = jest.fn();
  const mockTodos: TodoItem[] = [];

  const inputFormProps: InputFormProps = {
    todos: mockTodos,
    setTodos: mockSetTodos,
  };

  render(<InputForm {...inputFormProps} />);
  
  const inputField = screen.getByPlaceholderText("Enter Something");
  const addButton = screen.getByRole("button");

  // Simulate entering a task and clicking the button
  fireEvent.change(inputField, { target: { value: "New Task" } });
  fireEvent.click(addButton);

  // Assert that input field value is empty
  expect(inputField).toHaveValue("");
});

it("displays an error message when adding an empty todo", () => {
  const mockSetTodos = jest.fn();
  const mockTodos: TodoItem[] = [];

  const inputFormProps: InputFormProps = {
    todos: mockTodos,
    setTodos: mockSetTodos,
  };

  render(<InputForm {...inputFormProps} />);
  
  const addButton = screen.getByRole("button");

  // Simulate clicking the button without entering a task
  fireEvent.click(addButton);

  // Assert that the error message is displayed
  expect(screen.getByText("Please enter a valid todo.")).toBeInTheDocument();
});
