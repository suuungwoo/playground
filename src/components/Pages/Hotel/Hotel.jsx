import React from 'react';

import {GeocodeResult} from './GeocodeResult';
import {Map} from './Map';
import {SearchForm} from './SearchForm';
import {HotelsTable} from './HotelsTable';
import enhance from './enhancer';

function Hotel(props) {
  const {geocodeResult, history} = props;
  return (
    <div className="a__search_hotel">
      <h1 className="hotel_title">ホテル検索</h1>
      <SearchForm history={history} />
      <div className="result_area">
        <div className="result_map">
          <Map location={geocodeResult.location} />
          <GeocodeResult
            address={geocodeResult.address}
            location={geocodeResult.location}
          />
        </div>
        <div className="result_hotels">
          <h2>ホテル検索結果</h2>
          <HotelsTable />
        </div>
      </div>
    </div>
  );
}

export default enhance(props => <Hotel {...props} />);
