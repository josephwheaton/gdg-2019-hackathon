import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private config: ConfigService, private http: HttpClient) {}

  getUser(firstName: string, lastName: string, email: string) {
    const params = new HttpParams();
    params.set('firstName', firstName);
    params.set('lastName', lastName);
    params.set('email', email);

    return this.http.get(this.config.apiUrl + '/users', { params });
  }

  createUser(firstName: string, lastName: string, email: string) {
    return this.http.post(this.config.apiUrl + '/users', {
      firstName,
      lastName,
      email
    });
  }
}
