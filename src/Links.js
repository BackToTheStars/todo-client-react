
import React from 'react';

function Links() {

  return (
    <div>
      <p id="date">July 3, 2020</p>
      <h4>Project: ToDo list, connected to Mongo Atlas DB</h4>
      <p>Links:</p>
      <p id="link"><span>{'Client Github website: '}</span>
        <a href="http://BackToTheStars.github.io/todo-client-react">http://BackToTheStars.github.io/todo-client-react</a>
      </p>
      <p id="link"><span>{'Client Github repository: '}</span>
        <a href="https://github.com/BackToTheStars/todo-client-react/tree/master/src">https://github.com/BackToTheStars/todo-client-react/tree/master/src</a>
      </p>
      <p id="link"><span>{'Backend Heroku website: '}</span>
        <a href="https://to-do-server-heroku-092.herokuapp.com/todo">https://to-do-server-heroku-092.herokuapp.com/todo</a>
      </p>
      <p id="link"><span>{'Backend Github repository: '}</span>
        <a href="https://github.com/BackToTheStars/0092-todo-server-heroku">https://github.com/BackToTheStars/0092-todo-server-heroku</a>
      </p>
      <br />
    </div>
  );
}

export default Links;
