import { render, screen } from '@testing-library/react';
import TodoListHeading from './TodoListHeading';

test('renders Todo List heading', () => {
  render(<TodoListHeading />);
  const headingElement = screen.getByText(/Todo List/i);
  expect(headingElement).toBeInTheDocument();
});
