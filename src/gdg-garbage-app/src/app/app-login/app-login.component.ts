import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { combineLatest } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ConfigService } from 'src/app/services/config.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss']
})
export class AppLoginComponent implements OnInit {
  constructor(private config: ConfigService, private usersService: UsersService) {}

  loginForm: FormGroup;
  loading = true;
  firstName = '';
  lastName = '';
  email = '';

  ngOnInit() {
    combineLatest(this.usersService.getUser(this.firstName, this.lastName, this.email))
      .pipe(
        tap(v => {
          this.loading = false;
        })
      )
      .subscribe();
  }
}
