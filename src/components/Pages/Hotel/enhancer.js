import {type HOC, compose, lifecycle, setDisplayName} from 'recompose';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {startSearch} from '../../../actions';

const mapStateToProps = state => ({
  geocodeResult: state.geocodeResult,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({startSearch}, dispatch);

const enhance: HOC<*, *> = compose(
  setDisplayName('Hotel'),
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      const {startSearch} = this.props;
      startSearch();
    },
  }),
);

export default enhance;
