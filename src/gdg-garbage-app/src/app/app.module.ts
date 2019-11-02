import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatCardModule,
  MatCommonModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppMapComponent } from './app-map/app-map.component';
import { AppRoutingModule } from './app-routing.module';
import { AppSidebarComponent } from './app-sidebar/app-sidebar.component';
import { AppComponent } from './app.component';
import { AppInfoFormComponent } from './app-info-form/app-info-form.component';

@NgModule({
  declarations: [AppComponent, AppMapComponent, AppSidebarComponent, AppFooterComponent, AppLoginComponent, AppInfoFormComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCmz2Xz89GRBA6-kFxIOYsc7jyv_qs58G8'
    }),
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatCommonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatDividerModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
