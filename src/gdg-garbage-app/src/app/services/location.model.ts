export class Location {
  id: number;
  lat: number;
  lng: number;
  alpha?: number;
  description: string;

  constructor(lat: number = 0, lng: number = 0, alpha: number = 0) {
    this.lat = lat;
    this.lng = lng;
    this.alpha = alpha;
  }
}
