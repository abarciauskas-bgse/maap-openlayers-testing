import Map from 'ol/Map.js';
import View from 'ol/View.js';
import {defaults as defaultControls, ScaleLine} from 'ol/control.js';
import TileLayer from 'ol/layer/Tile.js';
import TileWMS from 'ol/source/TileWMS.js';


var layers = [
  new TileLayer({
    source: new TileWMS({
      url: 'https://ahocevar.com/geoserver/wms',
      params: {
        'LAYERS': 'ne:NE1_HR_LC_SR_W_DR',
        'TILED': true
      }
    })
  }),
  new TileLayer({
    source: new TileWMS({
      url: 'http://localhost:5000/api/wms/GetMap',
      params: {
        'LAYERS': 'lvis_collection_level_2',
        'TRANSPARENT': true,
        'VERSION': '1.1.0'  
      }
    })
  })  
];

var map = new Map({
  controls: defaultControls().extend([
    new ScaleLine({
      units: 'degrees'
    })
  ]),
  layers: layers,
  target: 'map',
  view: new View({
    projection: 'EPSG:4326',
    center: [10, 0],
    zoom: 8
  })
});