import React from 'react';

import {GeocodeResult} from './GeocodeResult';
import {Map} from './Map';
import {SearchForm} from './SearchForm';
import {HotelsTable} from './HotelsTable';
import enhance from './enhancer';

function Hotel(props) {
  const {geocodeResult, history} = props;
  return (
    <div className="search_page">
      <h1 className="app_title">ホテル検索</h1>
      <SearchForm history={history} />
      <div className="result_area">
        <div className="result_left">
          <Map location={geocodeResult.location} />
          <GeocodeResult
            address={geocodeResult.address}
            location={geocodeResult.location}
          />
        </div>
        <div className="result_right">
          <h2>ホテル検索結果</h2>
          <HotelsTable />
        </div>
      </div>
    </div>
  );
}

export default enhance(props => <Hotel {...props} />);
