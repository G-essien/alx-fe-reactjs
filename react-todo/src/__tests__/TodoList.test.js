import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

test('renders TodoList component', () => {
    render(<TodoList />);
    const heading = screen.getByText(/todo list/i);  // Look for the heading element
    expect(heading).toBeInTheDocument();
});


test('adds a new todo', () => {
    render(<TodoList />);
    fireEvent.change(screen.getByPlaceholderText(/add a todo/i), { target: { value: 'New Todo' } });
    fireEvent.click(screen.getByText(/add/i));
    expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('toggles todo completion status', () => {
    render(<TodoList />);
    const firstTodo = screen.getByText('Learn React');
    fireEvent.click(firstTodo);
    expect(firstTodo).toHaveStyle('text-decoration: line-through');

    fireEvent.click(firstTodo);
    expect(firstTodo).toHaveStyle('text-decoration: none');
});

test('deletes a todo', () => {
    render(<TodoList />);
    const todoToDelete = screen.getByText('Learn React');
    fireEvent.click(todoToDelete.nextElementSibling);
    expect(todoToDelete).not.toBeInTheDocument();
});
