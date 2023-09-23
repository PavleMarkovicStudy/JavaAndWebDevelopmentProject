import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { GeoLocation } from './classes';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  // We make an observable array of locations
  // this serves to make city picker component able to add cities
  // and the dashboard component to be able to observe the array real time
  private locations: GeoLocation[] = [];
  private locationSubject = new BehaviorSubject<GeoLocation[]>(this.locations);

  // function for getting the locations array
  getLocations() {
    // observable means that the component using this will observe it
    // meaning that it will update in real time
    return this.locationSubject.asObservable();
  }

  // function for adding locations
  addLocation(newLocation: GeoLocation) {
    this.locations.push(newLocation);
    this.locationSubject.next([...this.locations]);
  }

  // this function sets the whole locations array variable
  // used in app.component.ts for loading from local storage
  setAllLocations(locations: GeoLocation[]) {
    this.locations = locations;
    this.locationSubject.next([...this.locations]);
  }

  // Function for deleting locations individually, used in location-card
  deleteLocation(location: GeoLocation) {
    const index = this.locations.findIndex((item) => item === location);
    if (index !== -1) {
      this.locations.splice(index, 1);
      this.locationSubject.next([...this.locations]);
    }
  }

  // function that gets used in the header with the delete all cards button
  deleteAllLocations() {
    this.locations = [];
    this.locationSubject.next([...this.locations]);
  }
  constructor() {}
}
