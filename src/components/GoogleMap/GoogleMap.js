import React, { Component } from 'react'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
export class MapContainer extends Component {
  render() {
    return (
      <Map 
        google={this.props.google}
        zoom={16}
        style={{width: '100%', height: '100%', position: 'relative', display: 'block'}}
        className={'map'}
        initialCenter={{
          lat: 20.680756,
          lng: -103.375020
        }}
        >
      <Marker
        onClick={this.onMarkerClick}
        title={'Estancia 25 Arquitectos.'}
        name={'Estancia 25 Arquitectos'}
        position={{lat: 20.680756,lng: -103.375020}} />
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>Estancia25</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyA1whlGfSLKQU0ye0IprXXHzpMmQQDWuaw")
})(MapContainer)