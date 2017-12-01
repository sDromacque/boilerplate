import React from 'react';
import ReactMapboxGl, { ScaleControl, RotationControl, ZoomControl, Layer } from 'react-mapbox-gl';
import 'semantic-ui-css/semantic.min.css';

const accessToken = 'pk.eyJ1Ijoic2Ryb21hY3F1ZSIsImEiOiJjajZnZGdmc3UwN3QwMnFvNTI0M3FwZnBkIn0.fXR7m3qusVEN_XadXVeshw';
const style = ({
  style: 'mapbox://styles/mapbox/streets-v9',
});
const mapCenter = [3.057256000000052, 50.62924999999999];

const position = ({
  position: 'bottom-left',
});

const Map = ReactMapboxGl({
  accessToken,
});

const mapStyle = {
  height: '96vh',
  width: '100vw',
};

const paintLayer = {
  'fill-extrusion-color': '#aaa',
  'fill-extrusion-height': {
    type: 'identity',
    property: 'height'
  },
  'fill-extrusion-base': {
    type: 'identity',
    property: 'min_height'
  },
  'fill-extrusion-opacity': 0.6
};


const HomePage = () => (
  <div>
    <Map
      center={mapCenter}
      style={style.style}
      containerStyle={mapStyle}
    >
      <ScaleControl
        position={position.position}
      />
      <ZoomControl />
      <RotationControl
        style={{ top: 80 }}
      />
      <Layer
        id="3d-buildings"
        sourceId="composite"
        sourceLayer="building"
        filter={['==', 'extrude', 'true']}
        type="fill-extrusion"
        minZoom={14}
        paint={paintLayer}
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
