import React from 'react';

function List(props) {
  return (
    <div>

      {props.list.map(el => (
          <li key={el._id}>
            <strong>{el.name}</strong>
            {el.description}
          </li>
        )
      )}

    </div>
  );
}

export default List;
