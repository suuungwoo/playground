/* @flow */
import * as React from 'react';
import {Route} from 'react-router-dom';
import {Hotel} from '~Pages';
import {paths} from '~config';

function HotelRoutes() {
  return (
    <>
      <Route exact path={paths.common.hotel} component={Hotel} />
    </>
  );
}
export default HotelRoutes;
