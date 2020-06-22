import React from 'react';

function List(props) {

  return (
    <div>

      {props.list.map(el => <li key={el._id}>
            <strong>{el.name}</strong>
            {el.description}<span>{'    '}</span>

            <button onClick={() => props.remove(el._id)}>Remove</button>

        </li>
      )}

    </div>
  );
}

export default List;
