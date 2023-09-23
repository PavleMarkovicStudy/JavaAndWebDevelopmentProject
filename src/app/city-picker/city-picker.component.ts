import { Component } from '@angular/core';
// import the location service so that I can call the api through it
// this is for getting the lat and lon of places so that we can then ask the
// weather api for data using those
import { LocationService } from '../location.service';
import { GeoLocation } from '../classes';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-city-picker',
  templateUrl: './city-picker.component.html',
  styleUrls: ['./city-picker.component.scss'],
})
export class CityPickerComponent {
  // variable for display the dialog button or not
  visible: boolean = false;
  dialogPosition: string = 'top';
  // selected city will be the citie the user selects at the end
  selectedLocationSearch: string = '';
  selectedLocationObject: GeoLocation | undefined = undefined;
  // cityOptions will come from an api call where we'll get 5 options each search
  // each search is going to be after enter or after about 1.5 seconds of no writing
  locationOptions: GeoLocation[] = [];

  constructor(private locationService: LocationService, private globalService: GlobalService) {}

  // updates options by calling api and mapping the data
  async updateLocationOptions() {
    try {
      const apiResponse = await this.fetchPossibleLocations(this.selectedLocationSearch);
      this.locationOptions = apiResponse.map(this.mapResponseToGeoLocation);
    } catch (error) {
      console.error(error);
    }
  }

  // method that gets called everytime the user changes the input so that it
  // allways udpates the options
  completeMethod() {
    this.updateLocationOptions();
  }

  // Selects the Expected Location
  selectMethod(e: any) {
    this.selectedLocationObject = e;
  }

  // when the user presses enter, this function is called
  // it will auto select the first option from the list if
  // there is any available
  enterSelectMethod() {
    if (this.locationOptions.length > 0) {
      this.selectedLocationObject = this.locationOptions[0];
    }
  }

  // calls api and fetches results so that the user can choose
  async fetchPossibleLocations(search: string) {
    try {
      const response = await this.locationService.getLocationOptions(search, 5);
      return response;
    } catch (error) {
      console.error(error);
      throw error; // Re-throw the error to propagate it to the caller
    }
  }

  // Transforms the response from the api to the class I made
  // some fields where unnecesary so this keeps the code cleaner
  mapResponseToGeoLocation(data: any): GeoLocation {
    const { country, lat, lon, name } = data;
    return new GeoLocation(country, lat, lon, name);
  }

  // function for displaying the city picker
  showCityPicker() {
    this.visible = true;
  }

  // function for adding the location to the global storage
  addLocationMethod() {
    if (this.selectedLocationObject != undefined) {
      this.globalService.addLocation(this.selectedLocationObject);
      this.saveLocationsToLocalStorage(this.selectedLocationObject);
      this.visible = false;
    }
  }

  saveLocationsToLocalStorage(location: GeoLocation) {
    const storedLocationsJSON = localStorage.getItem('geoLocations');
    if (storedLocationsJSON) {
      const storedLocations: GeoLocation[] = JSON.parse(storedLocationsJSON);
      storedLocations.push(location);
      const newStoredLocationsJSON = JSON.stringify(storedLocations);
      localStorage.setItem('geoLocations', newStoredLocationsJSON);
    } else {
      const initializedLocations = JSON.stringify([location]);
      localStorage.setItem('geoLocations', initializedLocations);
    }
  }
}
