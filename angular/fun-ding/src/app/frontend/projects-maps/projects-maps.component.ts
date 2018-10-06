import { Component, OnInit } from '@angular/core';
import { GeolocationService } from '../geolocation.service';

@Component({
  selector: 'app-projects-maps',
  templateUrl: './projects-maps.component.html',
  styleUrls: ['./projects-maps.component.css']
})
export class ProjectsMapsComponent implements OnInit {
  towLat: number;
  towLng: number;

  index: number;
  gebot: number;

  markers: Array<Marker> = [
    { latitude: 51.964243, longitude: 7.627700, info: 'Spielplatzprojekt'},
    { latitude: 51.864243, longitude: 7.627700, info: 'Wurstladen'  },
    { latitude: 51.964243, longitude: 7.617700, info: 'Spielplatzprojekt' }
  ];

  constructor(
    private geoService: GeolocationService,
    private garageInteractionService: GeolocationService
  ) {}

  async initMap() {
    const position = await this.geoService.getCurrentPosition().toPromise();
    this.towLat = position.coords.latitude;
    this.towLng = position.coords.longitude;

  }

  async ngOnInit() {
    this.initMap();
  }


}
class Marker {
    latitude: number;
    longitude: number;
    info: string;
    constructor(latitude, longitude, info) {
      this.latitude = latitude;
      this.longitude = longitude;
      this.info = info;
    }
}
