export class Location {
  lat: number;
  lng: number;
  alpha: number;

  constructor(lat: number = 0, lng: number = 0, alpha: number = 0) {
    this.lat = lat;
    this.lng = lng;
    this.alpha = alpha;
  }
}
