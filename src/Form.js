

import React, {useState} from 'react';

function Form(props) {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = () => {
    props.onSubmit({name, description});
    setName('');
    setDescription('');
  };

  return (
    <div>

      <input type="text" value={name} onChange={e=> setName(e.target.value)} />
      <input type="name" value={description}
             onChange={e => setDescription(e.target.value)} />
      <button onClick={onSubmit}>Create</button>

    </div>
  );
}

export default Form;
