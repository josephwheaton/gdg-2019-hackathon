import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss']
})
export class AppLoginComponent implements OnInit {
  constructor(private usersService: UsersService, private router: Router) {}

  loginForm: FormGroup;
  loading = true;
  submitting = false;

  ngOnInit() {
    this.loading = false;

    this.loginForm = new FormGroup(
      {
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required)
      },
      { updateOn: 'submit' }
    );
  }

  onLogin() {
    this.submitting = true;
    this.usersService
      .getUser(this.firstName.value, this.lastName.value, this.email.value)
      .pipe(
        tap((v: any) => {
          this.submitting = false;

          if (v.success) {
            this.router.navigate(['/map']);
          }
        })
      )
      .subscribe();
  }

  onRegister() {
    this.submitting = true;
    this.usersService
      .createUser(this.firstName.value, this.lastName.value, this.email.value)
      .pipe(
        tap(v => {
          this.submitting = false;
        })
      )
      .subscribe();
  }

  get firstName() {
    return this.loginForm.get('firstName');
  }
  get lastName() {
    return this.loginForm.get('lastName');
  }
  get email() {
    return this.loginForm.get('email');
  }
}
