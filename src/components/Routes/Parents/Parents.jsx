/* @flow */
import * as React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {TopRoutes, NotFoundRoutes} from '~Children';
import {paths} from '~config';

function BeforeRoutes() {
  return (
    <div className="a__before_routes">
      <Switch>
        <Route exact path={paths.common.top} component={TopRoutes} />
        <Route strict path={paths.common.top} component={NotFoundRoutes} />
        <Redirect to={paths.common.top} />
      </Switch>
    </div>
  );
}

export default BeforeRoutes;
