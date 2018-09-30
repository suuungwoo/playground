import React from 'react';

function GeocodeResult(props) {
  const {address, location} = props;
  return (
    <ul className="geocode_result">
      <li>住所：{address}</li>
      <li>緯度：{location.lat}</li>
      <li>経度：{location.lng}</li>
    </ul>
  );
}

GeocodeResult.defaultProps = {
  address: '',
};

export default GeocodeResult;
