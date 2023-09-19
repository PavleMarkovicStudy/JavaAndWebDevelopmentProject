import { Component } from '@angular/core';
import { GlobalService } from '../global.service';
import { GeoLocation } from '../classes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
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

  // subscribeToLocations() {
  //   this.globalService.getLocations().subscribe((locations) => {
  //     this.locations = locations;
  //   });
  // }

  // ngOnInit(): void {
  //   this.subscribeToLocations();
  // }
}
