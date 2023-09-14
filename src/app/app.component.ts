import { Component } from '@angular/core';
import { GlobalService } from './global.service';
import { GeoLocation } from './classes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'java-and-web-development';
  locations: GeoLocation[] = [];
  constructor(private globalService: GlobalService) {}

  subscribeToLocations() {
    this.globalService.getLocations().subscribe((locations) => {
      this.locations = locations;
    });
  }

  ngOnInit(): void {
    this.subscribeToLocations();
  }
}
