import { render, screen } from "@testing-library/react";
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
})

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

