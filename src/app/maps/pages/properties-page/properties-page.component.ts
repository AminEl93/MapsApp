import { Component } from '@angular/core';

interface Place {
    title: string;
    description: string;
    lngLat: [number, number];
}  

@Component({
    templateUrl: './properties-page.component.html'
})

export class PropertiesPageComponent {

    public places: Place[] = [
        {
            title: 'Estadio Camp Nou, Barcelona',
            description: 'Estadio de fútbol construido en el año 1957 dónde juega sus partidos el FC Barcelona. Es el estadio con mayor capacidad de Europa',
            lngLat: [2.1228155616205413, 41.38086748084271]
        },
        {
            title: 'Castillo de Montjuïc, Barcelona',
            description: 'Antigua fortaleza militar construida en el 1640 situada en la montaña de Montjuïc y un símbolo para la ciudad de Barcelona',
            lngLat: [2.1661614688361794, 41.363373121092394]
        },
        {
            title: 'Parque del Retiro, Madrid',
            description: 'Hermoso jardín histórico y enorme parque público situado en Madrid, considerado uno de los lugares más importantes de la capital',
            lngLat: [-3.682856123245614, 40.41427252134511]
        },
        {
            title: 'Universidad de Qarawiyyin, Fez',
            description: 'Institución universitaria más antigua de la historia construida en el año 859 que todavía está en funcionamiento, situada en la ciudad de Fez (Marruecos)',
            lngLat: [-4.973081723779302, 34.06454667232245]
        },
        {
            title: 'Alhambra, Granada',
            description: 'Conjunto de antiguos palacios, jardines y fortalezas árabes construidos a principios del siglo XIV que son Patrimonio de la Humanidad',
            lngLat: [-3.588542276079693, 37.176456572577536]
        },
        {
            title: 'Pozo de Darvazá, Turkmenistán',
            description: 'Antigua prospección de gas de 30 metros de profundidad ubicada en el desierto de Karakum creada en 1971 y que actualmente aún está ardiendo sin parar',
            lngLat: [58.439612038982375, 40.25289208816983]
        }
    ]
}
