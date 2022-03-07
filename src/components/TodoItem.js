import React from 'react';

function TodoItem({id, title, onClick}) {
    return <div onClick={onClick.bind(this, id, title)}>{ title }</div>
}

export default TodoItem;

// <TodoItem title="Muhriddin" />