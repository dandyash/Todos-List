import React from 'react';
// import AddTodo from './AddTodo';
import { Link } from 'react-router-dom';

const Header = () => {
    // const todoShow = () => {
    //     console.log(true);
    //     setshow(true);
    // }

    // const [show, setshow] = useState(false);

    return (
        <header>
            <div className='container'>
                <div className='flex-header'>
                    <Link to='/'><h1 style={{ color: 'white' }}>Todos List</h1></Link>
                    <ul className='top-nav'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>
                    <Link to="/addTodo" className='add-btn'>Add New List</Link>
                </div>
            </div>
            {/* <AddTodo show={show} /> */}
        </header >
    )
}

export default Header