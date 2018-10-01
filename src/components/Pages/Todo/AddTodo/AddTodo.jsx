import React from 'react';

import enhance from './enhancer';

function AddTodo(props) {
  const {addTodo} = props;
  let input;

  return (
    <div className="a__add_todo">
      <input
        ref={node => {
          input = node;
        }}
      />
      <button
        onClick={() => {
          input.value && addTodo(input.value);
          input.value = '';
        }}
      >
        Add Todo
      </button>
    </div>
  );
}

export default enhance(props => <AddTodo {...props} />);
