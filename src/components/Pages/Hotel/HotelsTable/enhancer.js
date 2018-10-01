import {type HOC, compose, setDisplayName} from 'recompose';
import {connect} from 'react-redux';
import _ from 'lodash';

const sortedHotels = (hotels, sortKey) => {
  if (sortKey === 'price' || sortKey === 'distance') {
    return _.sortBy(hotels, sortKey);
  } else {
    return _.orderBy(hotels, sortKey, 'desc');
  }
};

const mapStateToProps = state => ({
  hotels: sortedHotels(state.hotels, state.sortKey),
});

const enhance: HOC<*, *> = compose(
  setDisplayName('HotelsTable'),
  connect(mapStateToProps, null),
);

export default enhance;
