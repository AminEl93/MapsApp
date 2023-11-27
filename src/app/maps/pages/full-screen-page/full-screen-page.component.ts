import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map } from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

@Component({
    templateUrl: './full-screen-page.component.html',
    styleUrls: ['./full-screen-page.component.css']
})

export class FullScreenPageComponent implements AfterViewInit {

    @ViewChild('map') divMap?: ElementRef;

    ngAfterViewInit(): void {  
      if (!this.divMap) throw 'El elemento HTML no fue encontrado';
  
      const map = new Map({
            container: this.divMap.nativeElement, // Container ID
            style: 'mapbox://styles/mapbox/streets-v12', // URL de estilos
            center: [2.17, 41.38], // Posición inicial [lng, lat]
            zoom: 11 // Zoom inicial
      });
    }
}
