import { Component } from '@angular/core';
// import the location service so that I can call the api through it
// this is for getting the lat and lon of places so that we can then ask the
// weather api for data using those
import { LocationService } from '../location.service';
import { GeoLocation } from '../classes';

@Component({
  selector: 'app-city-picker',
  templateUrl: './city-picker.component.html',
  styleUrls: ['./city-picker.component.scss'],
})
export class CityPickerComponent {
  // selected city will be the citie the user selects at the end
  selectedLocationSearch: string = '';
  selectedLocationObject: GeoLocation | undefined = undefined;
  // cityOptions will come from an api call where we'll get 5 options each search
  // each search is going to be after enter or after about 1.5 seconds of no writing
  locationOptions: GeoLocation[] = [];

  constructor(private locationService: LocationService) {}

  // updates options by calling api and mapping the data
  async updateLocationOptions() {
    try {
      const apiResponse = await this.fetchPossibleLocations(this.selectedLocationSearch);
      this.locationOptions = apiResponse.map(this.mapResponseToGeoLocation);
      console.log(this.locationOptions);
      // Handle search results here
    } catch (error) {
      // Handle errors here
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
    console.log(this.selectedLocationObject);
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
      const response = await this.locationService.getLocationOptions(search, 5).toPromise();
      return response;
    } catch (error) {
      // Handle errors here
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
}
