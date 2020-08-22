
import React from 'react';

function Links() {

  return (
    <div>
      <p id="date">Created: July 3, 2020</p>
      <p id="date">Updated: August 22, 2020</p>
      <br/>

      <h4>Project: ToDo list, connected to my Mongo Atlas DB, w/ backend deployed on Heroku</h4>

      <p>Client links:</p>

      <p id="link"><span>{'Github website: '}</span>
        <a href="http://BackToTheStars.github.io/todo-client-react">
          http://BackToTheStars.github.io/todo-client-react
        </a>
      </p>

      <p id="link"><span>{'Github repository: '}</span>
        <a href="https://github.com/BackToTheStars/todo-client-react/tree/master/src">
          https://github.com/BackToTheStars/todo-client-react/tree/master/src
        </a>
      </p>

      <p id="link"><span>{'Local folder: '}</span>
        <a href="D:\React\0050-todo-client">
          D:\React\0050-todo-client
        </a>
      </p>

      <p>Backend links:</p>

      <p id="link"><span>{'Heroku website: '}</span>
        <a href="https://to-do-server-heroku-092.herokuapp.com">
          https://to-do-server-heroku-092.herokuapp.com
        </a>
      </p>

      <p id="link"><span>{'Github repository: '}</span>
        <a href="https://github.com/BackToTheStars/todo-server-myown-remote-mongodb-checked">
          https://github.com/BackToTheStars/todo-server-myown-remote-mongodb-checked
        </a>
      </p>

      <p id="link"><span>{'Local folder: '}</span>
        <a href="D:\React\0101-my-own-todo-server-remote-atlas">
          D:\React\0101-my-own-todo-server-remote-atlas
        </a>
      </p>

      <br />
    </div>
  );
}

export default Links;
