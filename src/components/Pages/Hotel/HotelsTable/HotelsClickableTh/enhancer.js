import {
  type HOC,
  compose,
  lifecycle,
  setDisplayName,
  withHandlers,
} from 'recompose';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {setSortKey} from '../../../../../actions';

const mapStateToProps = (state, ownProps) => ({
  isSelected: ownProps.sortKey === state.sortKey,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({setSortKey}, dispatch);

const enhance: HOC<*, *> = compose(
  setDisplayName('HotelsClickableTh'),
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  lifecycle({}),
  withHandlers({
    onClick: props => () => {
      const {setSortKey, sortKey} = props;
      setSortKey(sortKey);
    },
  })
);

export default enhance;
