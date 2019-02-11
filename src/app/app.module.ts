import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DoctorsComponent } from '../components/doctors/doctors.component';
import { DoctorService } from './doctor.service';
import { GoogleApiComponent } from '../components/google-api/google-api.component';
import { GApiService } from './g-api.service';
import { DoctorInsuranceComponent } from '../components/doctor-insurance/doctor-insurance.component';
import { DoctorInsuranceService } from './doctor-insurance.service';

@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent,
    GoogleApiComponent,
    DoctorInsuranceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers:  [ DoctorService, GApiService, DoctorInsuranceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
