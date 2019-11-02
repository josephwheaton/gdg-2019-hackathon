import { AgmCoreModule } from '@agm/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatCommonModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatProgressSpinnerModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpMockRequestInterceptor } from 'src/app/interceptor-mock';
import { AppInfoFormComponent } from './app-info-form/app-info-form.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppMapComponent } from './app-map/app-map.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMapComponent,
    AppLoginComponent,
    AppInfoFormComponent
  ],
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
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpMockRequestInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
