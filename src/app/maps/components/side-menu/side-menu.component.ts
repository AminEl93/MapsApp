import { Component } from '@angular/core';

interface MenuItem {
    name : string;
    route: string;
}

@Component({
  selector: 'maps-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})

export class SideMenuComponent {
    
    public menuItems: MenuItem[] = [
        { route: '/maps/fullscreen', name: 'FullScreen' },
        { route: '/maps/zoom-range', name: 'ZoomRange' },
        { route: '/maps/markers', name: 'Marcadores' },
        { route: '/maps/places', name: 'Lugares' }
    ];
}
