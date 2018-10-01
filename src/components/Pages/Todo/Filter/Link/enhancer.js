import {type HOC, compose, setDisplayName, withHandlers} from 'recompose';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {visibilityFilter} from '../../../../../actions';

const mapStateToProps = (state, ownProps) => (
  console.log(ownProps.filter),
  {
    active: ownProps.filter === state.visibilityFilter,
  }
);
const mapDispatchToProps = dispatch =>
  bindActionCreators({visibilityFilter}, dispatch);

const enhance: HOC<*, *> = compose(
  setDisplayName('Link'),
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onClick: props => e => {
      const {visibilityFilter} = props;
      e.preventDefault();
      visibilityFilter(props.filter);
    },
  }),
);

export default enhance;
