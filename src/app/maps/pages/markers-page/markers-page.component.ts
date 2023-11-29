import { Component, ElementRef, ViewChild } from '@angular/core';
import { Map, LngLat, Marker } from 'mapbox-gl';

interface MarkerAndColor {
    color: string;
    marker: Marker;
}

@Component({
    templateUrl: './markers-page.component.html',
    styleUrls: ['./markers-page.component.css']
})

export class MarkersPageComponent {
    
    @ViewChild('map') divMap?: ElementRef;

    public markers: MarkerAndColor[] = [];

    public map?: Map;
    public currentLngLat: LngLat = new LngLat(2.159941673535286, 41.38693544873411);

    ngAfterViewInit(): void {  
        if (!this.divMap) throw 'El elemento HTML no fue encontrado';    
        this.map = new Map({
            container: this.divMap.nativeElement,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: this.currentLngLat,
            zoom: 13
        });

        // Crear marcadores personalizados
        /* 
        const markerHtml = document.createElement('div');
        markerHtml.innerHTML = 'Amin El Meziani'
        const marker = new Marker({
            color: 'red',
            element: markerHtml
        }).setLngLat(this.currentLngLat).addTo(this.map);
        */
    }

    // Crear un marcador
    createMarker() {
        if (!this.map) return;    
        // Generar un color hexadecimal de manera aleatoria
        const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
        const lngLat = this.map.getCenter();    
        this.addMarker(lngLat, color);
    }

    // Añadir un marcador
    addMarker(lngLat: LngLat, color: string) {
        if (!this.map) return;    
        const marker = new Marker({
            color: color,
            draggable: true
        }).setLngLat(lngLat).addTo(this.map);

        this.markers.push({ color, marker, });
    }

    // Borrar un marcador   
    deleteMarker(index: number) {
        this.markers[index].marker.remove();
        this.markers.splice(index, 1);
    }

    // Navegar hacia un marcador concreto
    flyTo(marker: Marker) {
        this.map?.flyTo({
            zoom: 15,
            center: marker.getLngLat()
        });    
    }    
}
