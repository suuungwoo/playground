/* @flow */
import * as React from 'react';
import {hot} from 'react-hot-loader';
import {ConnectedRouter} from 'connected-react-router';
import {history} from '../../store';
import type {Props} from './type';
import enhance from './enhancer';
import {Parents} from './Parents';

function Routes(props: Props) {
  return (
    <ConnectedRouter history={history}>
      <div className="a__routes">
        <Parents />
      </div>
    </ConnectedRouter>
  );
}

export default hot(module)(enhance(props => <Routes {...props} />));
