import React from 'react';

const Todo = (props) => {
    return (
        <div className='todo'>
            <div className='todo-header'>
                <h3>{props.todo.title}</h3>
                <button className='delete-btn' onClick={() => { props.onDelete(props.todo) }}>Delete</button>
            </div>
            <div className='todo-body'>
                <div className='list-item'>
                    <h4>{props.todo.content}</h4>
                </div>
            </div>
        </div>
    );
}

export default Todo