import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './Form'
import List from './List'
import Links from './Links'
import axios from 'axios'

function App() {

  const [list, setList] = useState([]);

  const getTodoAll = () => {
    axios({
      url: 'https://to-do-server-heroku-092.herokuapp.com/todo',
      method: 'GET'
    })
      .then(res => {
        console.log(res);
        setList(res.data)
      })
      .catch(e => console.log(e));
    };


  useEffect(() => {
    getTodoAll();
  }, []);

  const createTodo = (form) => {
    axios({
      url: 'https://to-do-server-heroku-092.herokuapp.com/todo/',
      method: 'POST',
      data: form
    })
      .then(res => {
        getTodoAll();
      })
      .catch(e => console.log(e));
  };

  const onToggleDone = (id, form) => {
    axios({
      url: `https://to-do-server-heroku-092.herokuapp.com/todo/${id}`,
      method: 'PUT',
      data: form
    })
      .then(res => {
        getTodoAll();
      })
      .catch(e => console.log(e));
  };

  const saveTask = (form) => {
    axios({
      url: `https://to-do-server-heroku-092.herokuapp.com/todo/${form._id}`,
      method: 'PATCH',
      data: form
    })
      .then(res => {
        getTodoAll();
      })
      .catch(e => console.log(e));
  };

  const remove = (id) => {
    axios({
      url: `https://to-do-server-heroku-092.herokuapp.com/todo/${id}`,
      method: 'DELETE'
    })
      .then(res => {
        getTodoAll();
      })
      .catch(e => console.log(e));
  };

  return (
    <div>
      <Links />
      <Form createTodo={createTodo}/>
      <List list={list} remove={remove} onToggleDone={onToggleDone} saveTask={saveTask}/>
    </div>
  );
}

export default App;
