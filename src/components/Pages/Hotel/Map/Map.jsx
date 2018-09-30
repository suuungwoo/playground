import React from 'react';
import {GoogleMap, withGoogleMap, Marker} from 'react-google-maps';

const InnerMap = withGoogleMap(({location, marker}) => (
  <GoogleMap defaultZoom={12} defaultCenter={location} center={location}>
    <Marker {...marker} />
  </GoogleMap>
));

function Map(props) {
  const {location} = props;
  return (
    <InnerMap
      containerElement={<div />}
      mapElement={<div className="map" />}
      location={location}
      marker={{position: location}}
    />
  );
}

export default Map;
