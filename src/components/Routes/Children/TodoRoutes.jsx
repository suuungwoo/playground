/* @flow */
import * as React from 'react';
import {Route} from 'react-router-dom';
import {Todo} from '~Pages';
import {paths} from '~config';

function TodoRoutes() {
  return (
    <>
      <Route exact path={paths.common.todo} component={Todo} />
    </>
  );
}
export default TodoRoutes;
