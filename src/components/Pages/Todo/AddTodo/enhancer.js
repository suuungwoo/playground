import {type HOC, compose, setDisplayName, withHandlers} from 'recompose';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {addTodo} from '../../../../actions';

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => bindActionCreators({addTodo}, dispatch);

const enhance: HOC<*, *> = compose(
  setDisplayName('AddTodo'),
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onSubmit: props => e => {
      e.preventDefault();
      const {addTodo} = props;
      const value = e.target.todo.value;
      value && addTodo(value);
      e.target.todo.value = '';
    },
    onChange: props => e => {
      e.preventDefault();
    },
  }),
);

export default enhance;
