import { Component } from '@angular/core';
import { GlobalService } from './global.service';
import { GeoLocation } from './classes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Weather App';
  constructor(private globalService: GlobalService) {}

  // this function retrieves data from local storage, which is the storage saved into the user browser
  // and that persists closing the web app, parses that data from string to JSON getting readable js 
  // objects, and then updates the GlobalService with it, which is what the other components use
  retrieveFromLocalStorage() {
    const storedLocationsJSON = localStorage.getItem('geoLocations');
    if (storedLocationsJSON != null) {
      const storedLocations: GeoLocation[] = JSON.parse(storedLocationsJSON);
      this.globalService.setAllLocations(storedLocations);
    }
  }

  // calls the function on init, since this is app component, when the app gets loaded
  ngOnInit(): void {
    this.retrieveFromLocalStorage();
  }
}
