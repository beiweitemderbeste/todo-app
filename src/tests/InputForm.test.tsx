import { render, screen } from "@testing-library/react";
import jest from "jest-mock";
import userEvent from "@testing-library/user-event";
import InputForm from "../components/InputForm";
import { InputFormProps } from "../ts/interfaces/InputForm.interfaces";
import { TodoItem } from "../ts/interfaces/App.interfaces";

it("tests if the inputfield is there", () => {
  const mockSetTodos = jest.fn();
  const mockTodos: TodoItem[] = [];

  const inputFormProps: InputFormProps = {
    todos: mockTodos,
    setTodos: mockSetTodos,
  };

  render(<InputForm {...inputFormProps} />);
  expect(screen.getByPlaceholderText("Enter Something")).toBeInTheDocument();
});

it("tests if the input button is there", () => {
  const mockSetTodos = jest.fn();
  const mockTodos: TodoItem[] = [];

  const inputFormProps: InputFormProps = {
    todos: mockTodos,
    setTodos: mockSetTodos,
  };

  render(<InputForm {...inputFormProps} />);
  expect(screen.getByRole("button")).toBeInTheDocument();
});
