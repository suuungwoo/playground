import React from 'react';

import {AddTodo} from './AddTodo';
import {Filter} from './Filter';
import {TodoList} from './TodoList';

function Todo(props) {
  return (
    <div className="a__todo">
      <h1 className="todo_title">Todo</h1>

      <AddTodo />
      <Filter />
      <TodoList />
    </div>
  );
}

export default Todo;
