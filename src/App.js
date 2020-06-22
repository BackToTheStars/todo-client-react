import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './Form'
import List from './List'
import axios from 'axios'

function App() {

  const [list, setList] = useState([]);

  const getTodoAll = () => {
    axios({
      url: 'http://localhost:5000/todo',
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
      url: 'http://localhost:5000/todo/',
      method: 'POST'
    })
      .then(res => {
        getTodoAll();
      })
      .catch(e => console.log(e));
  };

  const remove = (id) => {
    axios({
      url: `http://localhost:5000/todo/${id}`,
      method: 'DELETE'
    })
      .then(res => {
        getTodoAll();
      })
      .catch(e => console.log(e));
  };

  return (
    <div>
      <Form onSubmit={createTodo}/>
      <List list={list} remove={remove}/>
    </div>
  );
}

export default App;
