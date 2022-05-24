import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import About from './About';
import AddTodo from './AddTodo';
import { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  let initTodos;
  if (localStorage.getItem("todos") === null) {
    initTodos = [];
  } else {
    initTodos = JSON.parse(localStorage.getItem("todos"));
  }
  const [todos, setTodos] = useState(initTodos);

  const onDelete = (id) => {
    // console.log(id);
    setTodos(todos.filter((todo) => {
      return todo !== id;
    }))
  };

  const addTodo = (title, desc) => {
    // console.log(title, desc);
    let id;
    if (todos.length === 0) {
      id = 0;
    } else {
      id = todos.length + 1;
    }
    const newTodo = {
      id: id,
      title: title,
      content: desc,
    };
    setTodos([...todos, newTodo]);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Content onDelete={onDelete} todos={todos} />} />
          <Route path='/about' element={<About />} />
          <Route path='/addTodo' element={<AddTodo addTodo={addTodo} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
