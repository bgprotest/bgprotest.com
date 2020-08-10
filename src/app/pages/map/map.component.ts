import { Component, OnInit, AfterViewInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import OSM from 'ol/source/OSM';
import Feature from 'ol/Feature';
import Overlay from 'ol/Overlay';
import Point from 'ol/geom/Point';
import * as olProj from 'ol/proj';
import TileLayer from 'ol/layer/Tile';


// declare var ol: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements OnInit {

  map: any;

  ngOnInit(){
    this.map = new Map({
      target: 'hotel_map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: olProj.fromLonLat([7.0785, 51.4614]),
        zoom: 5
      })
    });

    var layer = new VectorLayer({
      source: new VectorSource({
        features: [
          new Feature({
            geometry: new Point([42.6977, 23.3219])
          })
        ]
      })
    });
    this.map.addLayer(layer);

    var container = document.getElementById('popup');
    var content = document.getElementById('popup-content');
    var closer = document.getElementById('popup-closer');

    var overlay = new Overlay({
      element: container,
      autoPan: true,
      autoPanAnimation: {
        duration: 250
      }
    });
    this.map.addOverlay(overlay);

    closer.onclick = function () {
      overlay.setPosition(undefined);
      closer.blur();
      return false;
    };

    let map = this.map;

    this.map.on('singleclick', function (event) {
      if (map.hasFeatureAtPixel(event.pixel) === true) {
        var coordinate = event.coordinate;

        content.innerHTML = '<b>Hello world!</b><br />I am a popup.';
        overlay.setPosition(coordinate);
      } else {
        overlay.setPosition(undefined);
        closer.blur();
      }
    });
  }

}
