// Class for the Location objects that come from the back end
// Usefull for autocompletion in vscode and keeps order
export class GeoLocation {
  country: string;
  lat: number;
  lon: number;
  name: string;

  constructor(country: string, lat: number, lon: number, name: string) {
    this.country = country;
    this.lat = lat;
    this.lon = lon;
    this.name = name;
  }
}
