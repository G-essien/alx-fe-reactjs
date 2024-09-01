import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

test('renders TodoList component with initial todos', () => {
    render(<TodoList />);
    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems.length).toBe(3); // Initial 3 todos
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
