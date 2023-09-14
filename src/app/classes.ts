// Class for the Location objects that come from the back end

import { visitAll } from '@angular/compiler';
import { max } from 'rxjs';

// Usefull for autocompletion in vscode and keeps order
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
