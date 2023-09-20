import { Component, Input } from '@angular/core';
import { GeoLocation, WeatherData } from '../classes';
import { WeatherService } from '../weather.service';
import { GlobalService } from '../global.service';
import { max } from 'rxjs';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss'],
})
export class LocationCardComponent {
  @Input()
  location!: GeoLocation;
  weatherData: any;

  cardTitle: string = '';
  constructor(private weatherService: WeatherService, private globalService: GlobalService) {}

  // Function to add weather to the location object
  async getWeather() {
    console.log('Get Weather is being called');
    const locationWithWeather = this.location;
    try {
      const apiResponse = await this.weatherService.getWeather(this.location);
      console.log(apiResponse);
      const weatherData = this.convertApiResponseToWeatherData(apiResponse);
      this.location.weather = weatherData;
      console.log(apiResponse, 'weather data  ');
    } catch (error) {
      console.error(error);
    }
  }

  // Function to get only the information we need from the api repsonse
  // this transforms from kelvin to celcius, and from meters to Km
  // as well as removing decimalsF
  convertApiResponseToWeatherData(apiResponse: any): WeatherData {
    const humidity: number = apiResponse.main.humidity;
    const pressure: number = apiResponse.main.pressure;
    const currentTemp: number = (apiResponse.main.temp - 273.15 + 0.5) | 0;
    const minTemp: number = (apiResponse.main.temp_min - 273.15 + 0.5) | 0;
    const maxTemp: number = (apiResponse.main.temp_max - 273.15 + 0.5) | 0;
    const visibility: number = apiResponse.visibility / 1000;
    const description: string = apiResponse.weather[0].description;
    const wind: number = apiResponse.wind.speed;
    return new WeatherData(humidity, pressure, currentTemp, minTemp, maxTemp, visibility, description, wind);
  }

  removeLocation(location: GeoLocation) {
    this.globalService.deleteLocation(location);
    this.removeLocationFromLocalStorage(location);
  }

  removeLocationFromLocalStorage(locationToRemove: GeoLocation) {
    const storedGeoLocationsJSON = localStorage.getItem('geoLocations');

    if (storedGeoLocationsJSON) {
      const storedGeoLocations: GeoLocation[] = JSON.parse(storedGeoLocationsJSON);

      const indexToRemove = storedGeoLocations.findIndex(
        (location) =>
          location.country === locationToRemove.country &&
          location.lat === locationToRemove.lat &&
          location.lon === locationToRemove.lon &&
          location.name === locationToRemove.name
      );

      if (indexToRemove !== -1) {
        storedGeoLocations.splice(indexToRemove, 1);
        localStorage.setItem('geoLocations', JSON.stringify(storedGeoLocations));
      }
    }
  }

  // when the component gets loaded we call the get weather for it and we transform the
  // title to include the country
  async ngOnInit(): Promise<void> {
    await this.getWeather();
    this.cardTitle = `${this.location.name}, ${this.location.country}`;
  }
}
