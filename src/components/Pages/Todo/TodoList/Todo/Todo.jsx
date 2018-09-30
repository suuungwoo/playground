import React from 'react';

function Todo(props) {
  const {text, completed, onClick} = props;
  return (
    <li
      onClick={onClick}
      style={{textDecoration: completed ? 'line-through' : 'none'}}
    >
      {text}
    </li>
  );
}

export default Todo;
