import React from 'react';

import {AddTodo} from './AddTodo';
import {Filter} from './Filter';
import {TodoList} from './TodoList';

function Todo(props) {
  return (
    <div className="a__react_and_redux_todo">
      <AddTodo />
      <TodoList />
      <Filter />
    </div>
  );
}

export default Todo;
