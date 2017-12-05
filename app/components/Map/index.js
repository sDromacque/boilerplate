import React, { Props } from 'react';
import mapboxgl from 'mapbox-gl';

import 'semantic-ui-css/semantic.min.css';
import './style.scss';

import config from '../../../conf/config.json';

const optionsMapBox = {
  accessToken: config.mapbox.token,
  style: config.mapbox.styles,
  threed: config.mapbox.layer,
};

mapboxgl.accessToken = optionsMapBox.accessToken;

class Map extends React.Component {
  constructor(props: Props) {
    super(props);
    this.state = {
      lng: 3.057256000000052,
      lat: 50.62924999999999,
      zoom: 13,
    };
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;

    const map = new mapboxgl.Map({
      container: 'map',
      style: optionsMapBox.style.default,
      center: [lng, lat],
      zoom,
    });

    map.addControl(new mapboxgl.FullscreenControl());

    map.addControl(new mapboxgl.ScaleControl({
      maxWidth: 80,
      unit: 'metric',
    }));

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'top-right');

    map.on('load', () => {
      map.addLayer({
        id: '3d-buildings',
        source: 'composite',
        'source-layer': 'building',
        filter: ['==', 'extrude', 'true'],
        type: 'fill-extrusion',
        minzoom: 15,
        paint: optionsMapBox.threed,
      });
    });
  }

  render() {
    return (
      <div id="map">
      </div>
    );
  }
}

export default Map;
