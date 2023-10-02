import {Directive, ElementRef, OnInit} from '@angular/core';
import {CesiumTerrainProvider, Viewer} from 'cesium';

// import OLCesium from 'ol-cesium';
const OLCesium = require('ol-cesium');
import Map from 'ol/Map';
import {View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import {BingMaps, OSM, XYZ} from 'ol/source';
import * as Cesium from "cesium";

@Directive({
  selector: '[appCesium]'
})
export class CesiumDirective implements OnInit {

  constructor(private el: ElementRef) {
    console.log('In the name of Allah');
  }

  ngOnInit(): void {


    console.log('ol Cesium: ', OLCesium);
    // const worldTerrain = new CesiumTerrainProvider({
    //   url: 'http://localhost/cutom-terrain-url'
    // })
    const worldTerrain = Cesium.createWorldTerrain({
      requestWaterMask: true,
      requestVertexNormals: true,
    });

    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          visible: true,
          preload: Infinity,
          source: new OSM(),
        })
      ],
      view: new View({
        zoom: 5,
        center: [6000000, 4000000]
      })
    });
    const ol3d = new OLCesium.default({map: map});
    const scene = ol3d.getCesiumScene();
    scene.terrainProvider = worldTerrain;
    ol3d.setEnabled(true);

  }

}
