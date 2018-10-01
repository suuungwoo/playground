import React from 'react';
import {Todo} from './Todo';
import enhance from './enhancer';

function TodoList(props) {
  const {todos, onTodoClick} = props;

  return (
    <ul className="a__todo_list">
      {todos.length !== 0
        ? todos.map(todo => (
            <Todo
              key={todo.id}
              {...todo}
              onClick={() => onTodoClick(todo.id)}
            />
          ))
        : 'Todoはありません'}
    </ul>
  );
}

export default enhance(props => <TodoList {...props} />);
