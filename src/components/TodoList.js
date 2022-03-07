import React, { useState } from 'react';

import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

function TodoList() {
    const [todos, setTodos] = useState([]);

    function onTodoInputSubmit(todoText) {
        todos.push({
            id: Math.random().toString(),
            title: todoText
        });
        setTodos([...todos]);
    }

    function onTodoClick(todoId) {
        const newTodos = todos.filter(todo => todo.id !== todoId);
        setTodos(newTodos);
    }

    return (
        <div>
            <TodoInput onTodoSubmit={onTodoInputSubmit}></TodoInput>

            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    id={todo.id}
                    title={todo.title}
                    onClick={onTodoClick} />)
            )}
        </div>
    );
}

export default TodoList;
