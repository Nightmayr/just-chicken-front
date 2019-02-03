import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

// const mapStyles = {
//   width: '90%',
//   height: '50%'
// };

export class MapContainer extends Component {
  render() {
      return (
              <Map
                google={this.props.google}
                zoom={17}
                // style={mapStyles}
                initialCenter={{
                 lat: 53.473019,
                 lng: -2.297899
                }}
              />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC1MMtGmobhfH-Sj06ABsmcvnk243lbm4o'
})(MapContainer);
