import React from 'react';
import ReactMapboxGl, { ScaleControl, RotationControl, ZoomControl, Layer } from 'react-mapbox-gl';
import 'semantic-ui-css/semantic.min.css';
import './style.scss';

import config from '../../../conf/config.json';

const mapCenter = [3.057256000000052, 50.62924999999999];

const optionsMapBox = {
  accessToken: config.mapbox.token,
  style: config.mapbox.styles.default,
  threed: config.mapbox.layer,
};

const Map = ReactMapboxGl({ accessToken: optionsMapBox.accessToken });

const HomePage = () => (
  <div>
    <Map
      center={mapCenter}
      style={optionsMapBox.style}
    >
      <ScaleControl
        className="measure"
      />
      <ZoomControl />
      <RotationControl
        className="rotationControl"
      />
      <Layer
        id="3d-buildings"
        sourceId="composite"
        sourceLayer="building"
        filter={['==', 'extrude', 'true']}
        type="fill-extrusion"
        minZoom={14}
        paint={optionsMapBox.threed}
      />
    </Map>
  </div>
);

export default HomePage;

// import React from 'react'
// import ReactDOM from 'react-dom'
// import mapboxgl from 'mapbox-gl'
//
// mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';
//
// class homePage extends React.Component {
//
//   constructor(props: Props) {
//     super(props);
//     this.state = {
//       lng: 3.057256000000052,
//       lat: 50.62924999999999,
//       zoom: 10
//     };
//   }
//
//   componentDidMount() {
//     const { lng, lat, zoom } = this.state;
//
//     const map = new mapboxgl.Map({
//       container: this.mapContainer,
//       style: 'mapbox://styles/mapbox/streets-v9',
//       center: [lng, lat],
//       zoom
//     });
//
//   }
//
//   render() {
//     return (
//       <div>
//         <div ref={el => this.mapContainer = el} className="absolute top right left bottom" />
//       </div>
//     );
//   }
// }
// export default homePage
