/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

// const LoadingContainer = (props) => (
//     <div>Fancy loading container!</div>
// )
const MapContainer = props => {
  const points = [
    { lat: 42.02, lng: -77.01 },
    { lat: 42.03, lng: -77.02 },
    { lat: 41.03, lng: -77.04 },
    { lat: 42.05, lng: -77.02 },
  ];
  const bounds = new props.google.maps.LatLngBounds();
  for (let i = 0; i < points.length; i++) {
    bounds.extend(points[i]);
  }
  return (
    <div
      style={{
        position: 'relative',
        background: '#fff',
        minHeight: 360,
        width: '100%',
        height: '90vh',
      }}
    >
      <Map
        google={props.google}
        style={{ width: '100%', height: '100%' }}
        className="map"
        zoom={14}
      >
        <Marker
          title="The marker`s title will appear as a tooltip."
          name="SOMA"
          position={{ lat: 37.778519, lng: -122.40564 }}
        />
        <Marker name="Dolores park" position={{ lat: 37.759703, lng: -122.428093 }} />
        <Marker />
        <Marker
          name="Your position"
          position={{ lat: 37.762391, lng: -122.439192 }}
          icon={{
            url: '/path/to/custom_icon.png',
            anchor: new props.google.maps.Point(32, 32),
            scaledSize: new props.google.maps.Size(64, 64),
          }}
        />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDVKCKZaDNTPro9VoAu9xJqcaBXgzYySEk',
  // LoadingContainer: LoadingContainer
})(MapContainer);
