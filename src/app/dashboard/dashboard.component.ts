import { Component } from '@angular/core';
import { GlobalService } from '../global.service';
import { GeoLocation } from '../classes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  initialDragLocation: GeoLocation | undefined;
  finalDragLocation: GeoLocation | undefined;

  mockLocationOne: GeoLocation = {
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
  mockLocationTwo: GeoLocation = {
    name: 'London',
    country: 'GB',
    lat: 0,
    lon: 0,
    weather: {
      humidity: 80,
      pressure: 1.02,
      currentTemp: 4,
      minTemp: 0,
      maxTemp: 10,
      visibility: 4.3,
      description: 'rainny',
      wind: 3.4,
    },
  };
  mockLocationThree: GeoLocation = {
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
  mockLocationFour: GeoLocation = {
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
  mockLocationFive: GeoLocation = {
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
  mockLocationSix: GeoLocation = {
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
  mockLocationSeven: GeoLocation = {
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
  locations: GeoLocation[] = [
    this.mockLocationOne,
    this.mockLocationTwo,
    this.mockLocationThree,
    this.mockLocationFour,
    this.mockLocationFive,
    this.mockLocationSix,
    this.mockLocationSeven,
  ];
  constructor(private globalService: GlobalService) {}

  dragStart(location: GeoLocation) {
    this.initialDragLocation = location;
    console.log(location, 'drag started');
  }

  dragEnd(location: GeoLocation) {}

  drop(location: GeoLocation) {
    this.finalDragLocation = location;
    this.exchangeLocationsIndexes();
  }

  exchangeLocationsIndexes() {
    if (this.initialDragLocation === undefined || this.finalDragLocation === undefined) {
      console.error('Initial or final location is undefined. Cannot swap.');
      this.initialDragLocation = undefined;
      this.finalDragLocation = undefined;
      return;
    }

    const initialIndex = this.locations.findIndex((location) => location === this.initialDragLocation);
    const finalIndex = this.locations.findIndex((location) => location === this.finalDragLocation);

    if (initialIndex === -1 || finalIndex === -1) {
      console.error('Initial or final location not found in the array. Cannot swap.');
      return;
    }

    [this.locations[initialIndex], this.locations[finalIndex]] = [
      this.locations[finalIndex],
      this.locations[initialIndex],
    ];
  }

  // subscribeToLocations() {
  //   this.globalService.getLocations().subscribe((locations) => {
  //     this.locations = locations;
  //   });
  // }

  // ngOnInit(): void {
  //   this.subscribeToLocations();
  // }
}
