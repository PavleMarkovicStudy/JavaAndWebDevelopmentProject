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

  getLocationOptions(search: string, limit: number): Observable<any> {
    const url = `${this.apiUrl}${search}&limit=${limit}&appid=${this.apiKey}`;
    const response = this.http.get(url);
    return response
  }
}
