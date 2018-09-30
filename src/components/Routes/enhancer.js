/* @flow */
import {compose, setDisplayName, onlyUpdateForKeys, type HOC} from 'recompose';

const enhance: HOC<*, *> = compose(
  setDisplayName('Routes'),
  onlyUpdateForKeys(['location', 'match', 'history']),
);

export default enhance;
