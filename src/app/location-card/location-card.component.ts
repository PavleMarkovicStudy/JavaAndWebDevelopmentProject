import { Component, Input } from '@angular/core';
import { GeoLocation } from '../classes';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss'],
})
export class LocationCardComponent {
  @Input()
  location!: GeoLocation;
  weatherData: any;

  constructor(private weatherService: WeatherService) {}

  async getWeather() {
    try {
      const apiResponse = await this.weatherService.getWeather(this.location);
      this.weatherData = apiResponse;
      console.log(apiResponse, 'weather data  ');
      // Handle search results here
    } catch (error) {
      // Handle errors here
      console.error(error);
    }
  }

  async ngOnInit(): Promise<void> {
    await this.getWeather();
  }
}
