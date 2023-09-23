import { Component } from '@angular/core';
import { GlobalService } from '../global.service';
import { GeoLocation } from '../classes';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  // Variables that help for the drag and drop functionality
  initialDragLocation: GeoLocation | undefined;
  finalDragLocation: GeoLocation | undefined;

  // location array that gets iterated through to display everything
  locations: GeoLocation[] = [];
  constructor(private globalService: GlobalService) {}

  // function called when drag motion starts, it sets the initial location to the location where the drag started
  dragStart(location: GeoLocation) {
    this.initialDragLocation = location;
  }

  // function called when the dragged location gets dropped on another location or card
  // it sets the final dragLocation to where the first one was dropped and then
  // calls the function for switchin their indexes in the array of locations
  drop(location: GeoLocation) {
    this.finalDragLocation = location;
    this.exchangeLocationsIndexes();
  }

  // function that changes indexes of the initial and final location for drag and drop
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

  // subscribes to the locations array in global service
  // this is needed since the locations get added through another component
  // so keeping them in globalService allows reactivity to changes on this component through subscribe
  subscribeToLocations() {
    this.globalService.getLocations().subscribe((locations) => {
      this.locations = locations;
    });
  }

  // it ensures that on init (when the component gets loaded to DOM), the function for subscribing gets called
  ngOnInit(): void {
    this.subscribeToLocations();
  }
}
