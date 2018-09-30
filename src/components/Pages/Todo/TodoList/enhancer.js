import {type HOC, compose, setDisplayName, withHandlers} from 'recompose';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {toggleTodo} from '../../../../actions';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed);
    default:
      return [];
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({toggleTodo}, dispatch);

const enhance: HOC<*, *> = compose(
  setDisplayName('TodoList'),
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withHandlers({
    onTodoClick: props => id => {
      const {toggleTodo} = props;
      toggleTodo(id);
    },
  })
);

export default enhance;
