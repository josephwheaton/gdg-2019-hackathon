import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLoginComponent } from 'src/app/app-login/app-login.component';
import { AppMapComponent } from 'src/app/app-map/app-map.component';

const appRoutes: Routes = [
  { path: 'login', component: AppLoginComponent },
  { path: 'map', component: AppMapComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
