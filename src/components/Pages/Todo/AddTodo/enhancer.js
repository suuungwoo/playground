import {type HOC, compose, setDisplayName, withHandlers} from 'recompose';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {storage} from 'store';

import {addTodo} from '../../../../actions';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => bindActionCreators({addTodo}, dispatch);

const enhance: HOC<*, *> = compose(
  setDisplayName('AddTodo'),
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({}),
);

export default enhance;
