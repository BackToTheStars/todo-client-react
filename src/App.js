import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './Form'
import List from './List'
import axios from 'axios'

function App() {

  const [list, setList] = useState([]);

  const getTodoAll = () => {
    axios({
      url: 'https://to-do-server-heroku-092.herokuapp.com/todo',
      method: 'GET'
    })
      .then(res => {
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
        console.log("form: " + form);
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
      <Form createTodo={createTodo}/>
      <List list={list} remove={remove}/>
    </div>
  );
}

export default App;
