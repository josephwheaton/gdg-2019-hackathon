export class Location {
  id: number;
  lat: number;
  lng: number;
  alpha?: number;
  description?: string;

  constructor(lat: number = 0, lng: number = 0, description: string = '', alpha: number = 1) {
    this.lat = lat;
    this.lng = lng;
    this.description = description;
    this.alpha = alpha;
  }
}
