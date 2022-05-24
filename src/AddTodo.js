import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddTodo = (props) => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (title === "" || desc === "") {
            alert('Title Or Description Cannot Be Blank');
        } else {
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
            navigate('/');
        }
    }

    return (
        <main>
            <div className='container'>
                <form className='addTodo-form' onSubmit={submit}>
                    <h2>Add New Todo</h2>
                    <div className='form-control'>
                        <label htmlFor="todo-title">Title</label>
                        <input type="text" id='todo-title' value={title} name='todo-title' onChange={(e) => { setTitle(e.target.value) }} />
                    </div>
                    <div className='form-control'>
                        <label htmlFor="todos-desc">Description</label>
                        <textarea name="todos-desc" id="todos-desc" value={desc} onChange={(e) => { setDesc(e.target.value) }} rows="5"></textarea>
                    </div>
                    <input type="submit" value="Add Todo" name='submit' className='addTodo-btn' />
                </form>
            </div>
        </main>
    )
}

export default AddTodo