import React, { useState } from 'react';

function TodoInput(props) {
    const [todoText, setTodoText] = useState('');

    const submitStyle = {
        display: 'none',
    }

    function onChange(event) {
        setTodoText(event.target.value);
    }
    
    function onTodoSubmit(event) {
        // this will prevent browser refresh
        event.preventDefault();

        if (!event.target.value) {
            props.onTodoSubmit(todoText);
            setTodoText('');
        }
    }

    return (
        <form onSubmit={onTodoSubmit}>
            <input value={todoText} onChange={onChange} placeholder='Add todo' />
            <input type="submit" style={submitStyle}></input>
        </form>
    )
}

export default TodoInput;
