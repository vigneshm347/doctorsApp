import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { DoctorsComponent } from '../components/doctors/doctors.component';
import { DoctorService } from './doctor.service';
import { GoogleApiComponent } from '../components/google-api/google-api.component';
import { GApiService } from './g-api.service';
import { DoctorInsuranceComponent } from '../components/doctor-insurance/doctor-insurance.component';
import { DoctorInsuranceService } from './doctor-insurance.service';

const appRoutes: Routes = [
  {
    path: 'doctors',
    component: DoctorsComponent
  },
  {
    path: 'insurance',
    component: DoctorInsuranceComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent,
    GoogleApiComponent,
    DoctorInsuranceComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers:  [ DoctorService, GApiService, DoctorInsuranceService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
