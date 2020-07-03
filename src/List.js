import React, {useState} from 'react';

function List(props) {

  const [editedTask, setEditedTask] = useState({});

  const editTaskName = (e) => {
    setEditedTask({...editedTask, name: e.target.value})
  }
  const editTaskDescription = (e) => {
    setEditedTask({...editedTask, description: e.target.value})
  }
  const saveTask = () => {
    props.saveTask(editedTask);
    setEditedTask({});
  }

  return (
    <div>

      {props.list.map(el => (
        <div className="listItem" key={el._id}>

          {editedTask._id === el._id ? (
              <>
                <input type="text"
                       value={editedTask.name}
                       onChange={editTaskName}/>
                <input type="text"
                       value={editedTask.description}
                       onChange={editTaskDescription}/>
                <button onClick={saveTask} disabled={!editedTask.name.trim() || !editedTask.description.trim()}>
                  Save</button>
              </>
            )
            :
            (
            <>
              <span className="doneSign">{el.done===true ? "✅" : "❌"}</span>
              <strong onDoubleClick={() => setEditedTask(el)}>{el.name}</strong>
                {' - '}
              <span onDoubleClick={() => setEditedTask(el)}>{el.description}</span><span>{'    '}</span>
              <button onClick={() => {props.onToggleDone(el._id, {"done": !el.done});
              console.log(editedTask._id)}}>
              {el.done ? "Undone" : "Done"} </button>

              <button onClick={() => props.remove(el._id)}>Remove</button>
            </>
            )
          }
        </div>
        ))
      }

    </div>
  );
}

export default List;
