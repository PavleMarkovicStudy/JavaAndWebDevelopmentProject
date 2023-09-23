import { Component, ViewChildren, QueryList } from '@angular/core';
import { GlobalService } from '../global.service';
import { GeoLocation } from '../classes';
import { LocationCardComponent } from '../location-card/location-card.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  @ViewChildren(LocationCardComponent) locationComponents: QueryList<LocationCardComponent> | undefined;
  initialDragLocation: GeoLocation | undefined;
  finalDragLocation: GeoLocation | undefined;

  locations: GeoLocation[] = [];
  constructor(private globalService: GlobalService) {}

  dragStart(location: GeoLocation) {
    this.initialDragLocation = location;
  }

  refreshWeatherData() {
    console.log('refresh weather is being called on app dashboard component', 4);
    this.locationComponents?.forEach((component) => {
      console.log('the for each is beign called in the dashboard comp, for each location', 4);
      component.getWeather();
    });
  }

  dragEnd(location: GeoLocation) {}

  drop(location: GeoLocation) {
    this.finalDragLocation = location;
    this.exchangeLocationsIndexes();
  }

  exchangeLocationsIndexes() {
    if (this.initialDragLocation === undefined || this.finalDragLocation === undefined) {
      console.error('Initial or final location is undefined. Cannot swap.');
      this.initialDragLocation = undefined;
      this.finalDragLocation = undefined;
      return;
    }

    const initialIndex = this.locations.findIndex((location) => location === this.initialDragLocation);
    const finalIndex = this.locations.findIndex((location) => location === this.finalDragLocation);

    if (initialIndex === -1 || finalIndex === -1) {
      console.error('Initial or final location not found in the array. Cannot swap.');
      return;
    }

    [this.locations[initialIndex], this.locations[finalIndex]] = [
      this.locations[finalIndex],
      this.locations[initialIndex],
    ];
  }

  subscribeToLocations() {
    this.globalService.getLocations().subscribe((locations) => {
      this.locations = locations;
    });
  }

  ngOnInit(): void {
    this.subscribeToLocations();
  }
}
