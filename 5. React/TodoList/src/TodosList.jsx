import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { v4 as uuid } from 'uuid';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const initialTodos = JSON.parse(localStorage.getItem('todos')) || [];

export default function TodoList() {
    const [todos, setTodos] = useState(initialTodos);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const removeTodo = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    }

    const toggleTodo = (id) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            } else {
                return todo;
            }
        }));
    };

    const addTodo = (task) => {
        setTodos([...todos, { id: uuid(), task, completed: false }]);
    }

    return (
        <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", m: 3 }}>
            <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>Todos</Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} remove={removeTodo} toggle={() => toggleTodo(todo.id)} />
                ))}
                <TodoForm addTodo={addTodo} />
            </List>
        </Box>
    );
}
