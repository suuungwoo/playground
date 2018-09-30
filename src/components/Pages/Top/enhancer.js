/* @flow */
import {compose, setDisplayName, type HOC} from 'recompose';

const enhance: HOC<*, *> = compose(setDisplayName('Top'));

export default enhance;
