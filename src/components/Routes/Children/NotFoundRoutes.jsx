/* @flow */
import * as React from 'react';
import {Route} from 'react-router-dom';
import {NotFound} from '~Pages';
import {paths} from '~config';

function NotFoundRoutes() {
  return (
    <>
      <Route strict path={paths.common.top} component={NotFound} />
    </>
  );
}
export default NotFoundRoutes;
