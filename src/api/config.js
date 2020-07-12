
import React from 'react';
import axios from 'axios';

export default axios.create({
  baseURL: 'https://to-do-server-heroku-092.herokuapp.com/',
  timeout: 1000,
  headers: {}

});


