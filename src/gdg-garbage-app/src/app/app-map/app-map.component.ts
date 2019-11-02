import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { tap } from 'rxjs/operators';
import { LocationsService } from 'src/app/services/locations.service';
import { Location } from '../services/location.model';

@Component({
  selector: 'app-map',
  templateUrl: './app-map.component.html',
  styleUrls: ['./app-map.component.scss']
})
export class AppMapComponent implements OnInit {
  lat: number;
  lng: number;
  mapType: string;
  locations: Location[];
  selectedMarker: any;
  loading = true;
  zoomLevel: number;

  constructor(private cdRef: ChangeDetectorRef, private locationsService: LocationsService) {}

  ngOnInit() {
    this.lat = 43.03;
    this.lng = -87.91;
    this.mapType = 'roadmap';
    this.zoomLevel = 12;
    this.locations = [];
    combineLatest(this.locationsService.getLocations())
      .pipe(
        tap((v: any) => {
          console.log(`locations from api: %o`, v);
          const parsedLocations: [] = JSON.parse(v);
          console.log(`parsed locations: %o`, parsedLocations);
          parsedLocations.forEach((location: any) => {
            this.locations.push(new Location(location.latitude, location.longitude, location.description, 1));
          });
          this.cdRef.detectChanges();
          this.loading = false;
        })
      )
      .subscribe();
  }

  addMarker(lat: number, lng: number, event: any) {
    console.log(`lat: ${lat} lng: ${lng} event: %o`, event);
    this.locations.push(new Location(lat, lng));
  }

  selectMarker(event) {
    console.log(`selected marker: %o`, event);
    this.selectedMarker = {
      lat: event.latitude,
      lng: event.longitude
    };
  }
}
