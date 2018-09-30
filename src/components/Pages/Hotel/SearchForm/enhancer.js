import {type HOC, compose, setDisplayName, withHandlers} from 'recompose';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {startSearch, setPlace} from '../../../../actions';

const mapStateToProps = state => ({
  place: state.place,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({startSearch, setPlace}, dispatch);

const enhance: HOC<*, *> = compose(
  setDisplayName('SearchForm'),
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withHandlers({
    onSubmit: props => e => {
      e.preventDefault();
      const {startSearch, place} = props;
      props.history.push(`/hotel/?place=${place}`);
      startSearch();
    },
    onChange: props => e => {
      const {setPlace} = props;
      e.preventDefault();
      setPlace(e.target.value);
    },
  })
);

export default enhance;
