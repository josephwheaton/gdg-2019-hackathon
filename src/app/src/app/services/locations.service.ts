import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ConfigService } from 'src/app/services/config.service';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {
  constructor(private config: ConfigService, private http: HttpClient) {}

  getLocations() {
    console.log(this.config.apiUrl + '/locations');
    return this.http.get(this.config.apiUrl + '/locations').pipe(
      tap(v => {
        console.log(`getLocations result: %o`, v);
      })
    );
  }

  createLocation(latitude: number, longitude: number, description: string) {
    return this.http
      .post(this.config.apiUrl + '/locations', {
        latitude,
        longitude,
        description
      })
      .pipe(
        tap(v => {
          console.log(`createLocaiton result: %o`, v);
        })
      );
  }
}
