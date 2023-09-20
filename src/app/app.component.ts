import { Component, ViewChild, QueryList } from '@angular/core';
import { GlobalService } from './global.service';
import { GeoLocation } from './classes';
import { LocationCardComponent } from './location-card/location-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(LocationCardComponent) locationComponents: QueryList<LocationCardComponent> | undefined;
  title = 'java-and-web-development';

  constructor(private globalService: GlobalService) {}

  retrieveFromLocalStorage() {
    const storedLocationsJSON = localStorage.getItem('geoLocations');
    console.log(storedLocationsJSON);
    if (storedLocationsJSON != null) {
      console.log('stored locatinos is not null and this is happpening');
      const storedLocations: GeoLocation[] = JSON.parse(storedLocationsJSON);
      this.globalService.setAllLocations(storedLocations);
    }
  }

  refreshWeatherData() {
    this.locationComponents?.forEach((component) => {
      component.getWeather();
    });
  }

  ngOnInit(): void {
    this.retrieveFromLocalStorage();
  }
}
