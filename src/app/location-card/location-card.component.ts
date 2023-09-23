import { Component, Input } from '@angular/core';
import { GeoLocation, WeatherData } from '../classes';
import { WeatherService } from '../weather.service';
import { ConfirmationService, MessageService } from 'primeng/api';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss'],
  providers: [ConfirmationService, MessageService],
})
export class LocationCardComponent {
  // the location that the card displays is provided by the dashboard component as an input
  @Input() location!: GeoLocation;

  // Varibale for the card title, it is supposed to be the "name, Country", and the conversion must happen here instead of the html
  cardTitle: string = '';
  constructor(private weatherService: WeatherService, private globalService: GlobalService) {}

  // Function that calls the weather api, and inserts the data into our location object
  async getWeather() {
    try {
      const apiResponse = await this.weatherService.getWeather(this.location);
      const weatherData = this.convertApiResponseToWeatherData(apiResponse);
      this.location.weather = weatherData;
    } catch (error) {
      console.error(error);
    }
  }

  // Function to get only the information we need from the api response
  // this transforms from kelvin to celcius, and from meters to Km
  // as well as removing decimals
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

  // Function that is actually called when the delete button is pressed
  // removes from global service and from local storage
  removeLocation(location: GeoLocation) {
    this.globalService.deleteLocation(location);
    this.removeLocationFromLocalStorage(location);
  }

  // Function that removes sigle location from local storage, is the same as global service pretty much
  // but needs to pass from string to json and remove and then json to string and save
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
