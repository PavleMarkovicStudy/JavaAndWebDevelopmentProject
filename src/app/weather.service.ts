import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GeoLocation } from './classes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  // Setting the api key that I've got from the openWeatherMap.org api
  private apiKey: string = '2d188648ab210c3c27ffd214c6cb2e94';
  // the url where most calls will be made
  private apiUrl: string = 'https://api.openweathermap.org/data/2.5/weather';

  constructor(private http: HttpClient) {}

  // function for getting the current weather at a location
  async getWeather(location: GeoLocation): Promise<any> {
    const url = `${this.apiUrl}?lat=${location.lat}&lon=${location.lon}&appid=${this.apiKey}`;
    try {
      const response = await this.http.get(url).toPromise();
      return response;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
