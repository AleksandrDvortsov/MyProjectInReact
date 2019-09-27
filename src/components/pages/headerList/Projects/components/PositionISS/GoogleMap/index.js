import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import Logo from './img/spaceStation2.png';

const mapStyles = {
  width: '100%',
  height: '100%',
  position: 'absolute',
};

class MapContainer extends Component {
  
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={4}
        style={mapStyles}
        initialCenter={this.props.position}
        center={this.props.position}
        
      >
        <Marker 
        position={this.props.position}
        title='Iss Here!'
        icon={Logo}
        />
      </Map>
    );
  }

}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyCxFuokJAdMmyG9IrB3ctB3azMD_RSFQ0A'
})(MapContainer);





