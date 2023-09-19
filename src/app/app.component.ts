import { Component } from '@angular/core';
import { GlobalService } from './global.service';
import { GeoLocation } from './classes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'java-and-web-development';
  locations: GeoLocation[] = [];
  mockLocation: GeoLocation = {
    name: 'Rome',
    country: 'IT',
    lat: 0,
    lon: 0,
    weather: {
      humidity: 54,
      pressure: 1.02,
      currentTemp: 15,
      minTemp: 10,
      maxTemp: 20,
      visibility: 0,
      description: 'Cloudy',
      wind: 3.4,
    },
  };
  constructor(private globalService: GlobalService) {}

  subscribeToLocations() {
    this.globalService.getLocations().subscribe((locations) => {
      this.locations = locations;
    });
  }

  ngOnInit(): void {
    this.subscribeToLocations();
  }
}
