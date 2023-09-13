import { Component } from '@angular/core';
// import the location service so that I can call the api through it
// this is for getting the lat and lon of places so that we can then ask the
// weather api for data using those
import { LocationService } from '../location.service';

@Component({
  selector: 'app-city-picker',
  templateUrl: './city-picker.component.html',
  styleUrls: ['./city-picker.component.scss'],
})
export class CityPickerComponent {
  // selected city will be the citie the user selects at the end
  selectedLocation: any = '';
  // cityOptions will come from an api call where we'll get 5 options each search
  // each search is going to be after enter or after about 1.5 seconds of no writing
  locationOptions: any[] = [];

  constructor(private locationService: LocationService) {}

  async searchLocations() {
    try {
      const searchResult = await this.getPossibleLocations(this.selectedLocation);
      console.log(searchResult);
      this.locationOptions = searchResult;
      // Handle search results here
    } catch (error) {
      // Handle errors here
      console.error(error);
    }
  }

  async getPossibleLocations(search: string) {
    try {
      const response = await this.locationService.getLocationOptions(search, 5).toPromise();
      return response;
    } catch (error) {
      // Handle errors here
      console.error(error);
      throw error; // Re-throw the error to propagate it to the caller
    }
  }
}
