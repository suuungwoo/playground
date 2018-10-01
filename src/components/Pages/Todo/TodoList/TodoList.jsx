import React from 'react';
import {Todo} from './Todo';
import enhance from './enhancer';

function TodoList(props) {
  const {todos, onTodoClick} = props;

  return (
    <ul>
      {todos
        ? todos.map(todo => (
            <Todo
              key={todo.id}
              {...todo}
              onClick={() => onTodoClick(todo.id)}
            />
          ))
        : 'a'}
    </ul>
  );
}

export default enhance(props => <TodoList {...props} />);
