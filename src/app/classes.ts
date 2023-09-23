// Classes to keep the front end organized

import { visitAll } from '@angular/compiler';
import { max } from 'rxjs';

// everything in this app goes around this class, this is what the location card display
export class GeoLocation {
  country: string;
  lat: number;
  lon: number;
  name: string;
  weather?: WeatherData;

  constructor(country: string, lat: number, lon: number, name: string, weather?: WeatherData) {
    this.country = country;
    this.lat = lat;
    this.lon = lon;
    this.name = name;
    this.weather = weather;
  }
}

// this class was needed, or usefull because the call for weather data was independet from the call for a location name and position
export class WeatherData {
  humidity: number;
  pressure: number;
  currentTemp: number;
  minTemp: number;
  maxTemp: number;
  visibility: number;
  description: string;
  wind: number;

  constructor(
    humidity: number,
    pressure: number,
    currrentTemp: number,
    minTemp: number,
    maxTemp: number,
    visibility: number,
    description: string,
    wind: number
  ) {
    (this.humidity = humidity),
      (this.pressure = pressure),
      (this.currentTemp = currrentTemp),
      (this.minTemp = minTemp),
      (this.maxTemp = maxTemp),
      (this.visibility = visibility),
      (this.description = description),
      (this.wind = wind);
  }
}
