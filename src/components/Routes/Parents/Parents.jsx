/* @flow */
import * as React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {TopRoutes, NotFoundRoutes, TodoRoutes, HotelRoutes} from '~Children';
import {paths} from '~config';
import {Header} from '../../Layouts';

function BeforeRoutes() {
  return (
    <div className="a__before_routes">
      <Header />
      <Switch>
        <Route exact path={paths.common.top} component={TopRoutes} />
        <Route exact path={paths.common.todo} component={TodoRoutes} />
        <Route exact path={paths.common.hotel} component={HotelRoutes} />
        <Route strict path={paths.common.top} component={NotFoundRoutes} />
        <Redirect to={paths.common.top} />
      </Switch>
    </div>
  );
}

export default BeforeRoutes;
