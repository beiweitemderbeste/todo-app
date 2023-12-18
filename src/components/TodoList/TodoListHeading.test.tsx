import { render, screen } from '@testing-library/react';
import TodoListHeading from './TodoListHeading';

test('renders Todo List heading', () => {
  render(<TodoListHeading tableHeading="Test Heading" />);
  const headingElement = screen.getByText(/Test Heading/i);
  expect(headingElement).toBeInTheDocument();
});
