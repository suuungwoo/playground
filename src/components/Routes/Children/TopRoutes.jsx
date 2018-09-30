/* @flow */
import * as React from 'react';
import {Route} from 'react-router-dom';
import {Top} from '~Pages';
import {paths} from '~config';

function TopRoutes() {
  return (
    <>
      <Route exact path={paths.common.top} component={Top} />
    </>
  );
}
export default TopRoutes;
