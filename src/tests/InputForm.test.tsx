import { fireEvent, render, screen } from "@testing-library/react";
import InputForm from "../components/InputForm";
import jest from "jest-mock";
import { InputFormProps } from "../ts/interfaces/InputForm.interfaces";
import { TodoItem } from "../ts/interfaces/App.interfaces";

describe("InputForm component", () => {
  const mockSetTodos = jest.fn();
  const mockTodos: TodoItem[] = [];
  const inputFormProps: InputFormProps = {
    todos: mockTodos,
    setTodos: mockSetTodos,
  };

  it("displays the input field", () => {
    render(<InputForm {...inputFormProps} />);
    expect(screen.getByPlaceholderText("Enter Something")).toBeInTheDocument();
  });

  it("displays the add button", () => {
    render(<InputForm {...inputFormProps} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("adds a valid todo with non-empty input", () => {
    render(<InputForm {...inputFormProps} />);

    const inputField = screen.getByPlaceholderText("Enter Something");
    const addButton = screen.getByRole("button");

    // Submit a valid todo
    fireEvent.change(inputField, { target: { value: "Valid Task" } });
    fireEvent.click(addButton);

    expect(mockSetTodos).toHaveBeenCalledWith([
      ...mockTodos,
      { id: expect.any(String), title: "Valid Task", status: false },
    ]);

    // Ensure input field is cleared
    expect(inputField).toHaveValue("");
    // Ensure error message is not displayed
    expect(
      screen.queryByText("Your input must be between 4 and 20 characters.")
    ).not.toBeInTheDocument();
  });

  it("clears input field after adding a todo", () => {
    render(<InputForm {...inputFormProps} />);
    const inputField = screen.getByPlaceholderText("Enter Something");
    const addButton = screen.getByRole("button");

    fireEvent.change(inputField, { target: { value: "New Task" } });
    fireEvent.click(addButton);

    expect(inputField).toHaveValue("");
  });

  it("displays an error message for invalid input", () => {
    render(<InputForm {...inputFormProps} />);
    const addButton = screen.getByRole("button");

    // Submit an empty todo
    fireEvent.click(addButton);
    expect(
      screen.getByText("Your input must be between 4 and 20 characters.")
    ).toBeInTheDocument();

    // Submit a todo with fewer than 4 characters
    fireEvent.change(screen.getByPlaceholderText("Enter Something"), {
      target: { value: "abc" },
    });
    fireEvent.click(addButton);
    expect(
      screen.getByText("Your input must be between 4 and 20 characters.")
    ).toBeInTheDocument();

    // Submit a todo with more than 20 characters
    fireEvent.change(screen.getByPlaceholderText("Enter Something"), {
      target: { value: "This is a very long todo item." },
    });
    fireEvent.click(addButton);
    expect(
      screen.getByText("Your input must be between 4 and 20 characters.")
    ).toBeInTheDocument();
  });
});
