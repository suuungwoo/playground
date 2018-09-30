/* @flow */
import React from 'react';
import {Button} from 'semantic-ui-react';
import type {Props} from './type';
import enhance from './enhancer';

function NotFound(props: Props) {
  const {goToTop} = props;

  return (
    <div className="a__not_found">
      <h1>NotFound</h1>
      <Button onClick={goToTop}>To Dashboard</Button>
    </div>
  );
}

export default enhance(props => <NotFound {...props} />);
