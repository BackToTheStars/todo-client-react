import React from 'react';

function List(props) {

  return (
    <div>

      {props.list.map(el =>
        <li key={el._id}>
            <span className="doneSign">{el.done===true ? "✅" : null}</span>
            <strong>{el.name}</strong>
            {' - '}
            {el.description}<span>{'    '}</span>

          <button onClick={() => props.onToggleDone(el._id, {"done": !el.done})}>
            {el.done ? "Undone" : "Done"} </button>

          <button onClick={() => props.remove(el._id)}>Remove</button>
        </li>
      )}

    </div>
  );
}

export default List;
