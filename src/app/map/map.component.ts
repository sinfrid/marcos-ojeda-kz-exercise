import {
  Component,
  OnInit,
  ComponentFactoryResolver,
  ComponentRef,
  Injector,
  DoCheck,
  NgModule,
  ViewChild
} from "@angular/core";

import { tileLayer, latLng, marker, Marker } from "leaflet";

@Component({
  selector: 'map-component',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  map;
  options = {
    layers: [tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")],
    zoomControl: false
  };

  constructor() { }

  ngOnInit() {
  }

  onMapReady(map) {
    // get a local reference to the map as we need it later
    this.map = map;
    L.control.zoom({
        position: 'bottomright'
    }).addTo(map);
  }

}