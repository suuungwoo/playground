/* @flow */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Routes} from './components/Routes';
import {configureStore} from '~store';

(async function main() {
  ReactDOM.render(
    <Provider store={configureStore}>
      <Routes />
    </Provider>,
    window.document.getElementsByClassName('___main')[0],
  );
})();
