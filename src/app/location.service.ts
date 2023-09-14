import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  // Setting the api key that I've got from the openWeatherMap.org api
  private apiKey: string = '2d188648ab210c3c27ffd214c6cb2e94';
  // the url where most calls will be made
  private apiUrl: string = 'http://api.openweathermap.org/geo/1.0/direct?q=';

  constructor(private http: HttpClient) {}

  // function for getting a location with lattitude and longitude
  async getLocationOptions(search: string, limit: number): Promise<any> {
    const url = `${this.apiUrl}${search}&limit=${limit}&appid=${this.apiKey}`;

    try {
      const response = await this.http.get(url).toPromise();
      return response;
    } catch (error) {
      // Handle errors here
      console.error(error);
      throw error; // You can rethrow the error for the caller to handle
    }
  }
}
