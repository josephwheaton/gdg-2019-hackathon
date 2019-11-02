import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ConfigService } from 'src/app/services/config.service';
import { Location } from 'src/app/services/location.model';
import { User } from 'src/app/services/user.model';

const user: User = {
  id: 1,
  firstName: 'Rocky',
  lastName: 'Avilla',
  email: 'kavilla414@gmail.com'
};
const userJson: string = JSON.stringify(user);

const locations: Location[] = [
  {
    id: 1,
    lat: -88.5,
    lng: 43,
    description: 'asdf'
  },
  {
    id: 1,
    lat: -88.5,
    lng: 43,
    description: 'asdf'
  },
  {
    id: 2,
    lat: -89,
    lng: 43.01,
    description: 'ffff'
  },
  {
    id: 3,
    lat: -88.1,
    lng: 43.09,
    description: 'garbage'
  },
  {
    id: 4,
    lat: -87.9,
    lng: 42.94,
    description: 'trash'
  }
];
const locationsJson = JSON.stringify(locations);
console.log(`here is your garbage: ${locationsJson}`);

const urls = [
  {
    url: 'localhost:4200/users/user',
    json: userJson
  },
  {
    url: 'localhost:4200/locations',
    json: locationsJson
  }
];

@Injectable()
export class HttpMockRequestInterceptor implements HttpInterceptor {
  constructor(private config: ConfigService, private injector: Injector) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    for (const element of urls) {
      if (request.url === element.url) {
        console.log('Loaded from json : ' + request.url);
        return of(new HttpResponse({ status: 200, body: (element.json as any).default }));
      }
    }
    console.log('Loaded from http call :' + request.url);
    return next.handle(request);
  }
}
