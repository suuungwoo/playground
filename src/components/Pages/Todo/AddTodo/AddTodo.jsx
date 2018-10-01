import React from 'react';

import enhance from './enhancer';

function AddTodo(props) {
  const {onSubmit, onChange} = props;
  let input;

  return (
    <div className="a__add_todo">
      <form onSubmit={onSubmit}>
        <input onChange={onChange} name="todo" />
        <button>Add Todo</button>
      </form>
    </div>
  );
}

export default enhance(props => <AddTodo {...props} />);
