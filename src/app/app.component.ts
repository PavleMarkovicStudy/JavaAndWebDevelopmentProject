import { Component, ElementRef, QueryList, ViewChild } from '@angular/core';
import { GlobalService } from './global.service';
import { GeoLocation } from './classes';
import { LocationCardComponent } from './location-card/location-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(DashboardComponent) dashboardComponent: DashboardComponent | undefined;
  title = 'java-and-web-development';
  constructor(private globalService: GlobalService, private elementRef: ElementRef) {}

  retrieveFromLocalStorage() {
    const storedLocationsJSON = localStorage.getItem('geoLocations');
    if (storedLocationsJSON != null) {
      const storedLocations: GeoLocation[] = JSON.parse(storedLocationsJSON);
      this.globalService.setAllLocations(storedLocations);
    }
  }

  refreshWeatherData() {
    console.log('refresh weather is being called on app component', 3);
    this.dashboardComponent?.refreshWeatherData();
  }

  ngOnInit(): void {
    this.retrieveFromLocalStorage();
  }
}
