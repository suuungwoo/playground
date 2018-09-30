/* @flow */
import React from 'react';
import type {Props} from './type';
import enhance from './enhancer';

function Dashboard(props: Props) {
  return <div className="a__dashboard" />;
}

export default enhance(props => <Dashboard {...props} />);
