import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map } from 'mapbox-gl';

@Component({
    templateUrl: './zoom-range-page.component.html',
    styleUrls: ['./zoom-range-page.component.css']
})

export class ZoomRangePageComponent implements AfterViewInit, OnDestroy {
    
    @ViewChild('map') divMap?: ElementRef;
    
    public zoom: number = 12;
    public map?: Map;
    public currentLngLat: LngLat = new LngLat(2.159941673535286, 41.38693544873411); // Posición inicial

    ngAfterViewInit(): void {  
        if (!this.divMap) throw 'El elemento HTML no fue encontrado';    
        this.map = new Map({
            container: this.divMap.nativeElement,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: this.currentLngLat,
            zoom: this.zoom // Zoom inicial
        });
        this.mapListeners();
    }

    ngOnDestroy(): void {
        this.map?.remove();
    }
    
    mapListeners() {
        if (!this.map) throw 'Mapa no inicializado';
    
        this.map.on('zoom', (event) => {
            this.zoom = this.map!.getZoom();
        });
    
        this.map.on('zoomend', (event) => {
            if (this.map!.getZoom() < 20) return;
            this.map!.zoomTo(20);
        });
    
        this.map.on('move', () => {
            this.currentLngLat = this.map!.getCenter();
        });    
    }

    zoomIn() {
        this.map?.zoomIn();
    }
    
    zoomOut() {
        this.map?.zoomOut();
    }

    zoomChanged(value: string) {
        this.zoom = Number(value);
        this.map?.zoomTo(this.zoom);
    }
}
