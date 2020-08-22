
import React from 'react';

function Links() {

  return (
    <div>
      <p id="date">Created: July 3, 2020</p>
      <p id="date">Updated: August 22, 2020</p>
      <br/>

      <h4>Project: ToDo list, connected to my Mongo Atlas DB, w/ backend deployed on Heroku</h4>

      <p>Links:</p>

      <p id="link"><span>{'Client Github website: '}</span>
        <a href="http://BackToTheStars.github.io/todo-client-react">
          http://BackToTheStars.github.io/todo-client-react
        </a>
      </p>

      <p id="link"><span>{'Client Github repository: '}</span>
        <a href="https://github.com/BackToTheStars/todo-client-react/tree/master/src">
          https://github.com/BackToTheStars/todo-client-react/tree/master/src
        </a>
      </p>

      <p id="link"><span>{'Backend Heroku website: '}</span>
        <a href="https://to-do-server-heroku-092.herokuapp.com">
          https://to-do-server-heroku-092.herokuapp.com
        </a>
      </p>

      <p id="link"><span>{'Backend Github repository: '}</span>
        <a href="https://github.com/BackToTheStars/todo-server-myown-remote-mongodb-checked">
          https://github.com/BackToTheStars/todo-server-myown-remote-mongodb-checked
        </a>
      </p>
      <br />
    </div>
  );
}

export default Links;
