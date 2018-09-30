/* @flow */
import {compose, setDisplayName, withHandlers, type HOC} from 'recompose';
import {paths} from '~config';

const enhance: HOC<*, *> = compose(
  setDisplayName('NotFound'),
  withHandlers({
    goToTop: props => () => {
      props.history.push(paths.common.top);
    },
  }),
);

export default enhance;
