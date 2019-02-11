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
import { HomeComponent } from '../components/home/home.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { InsuranceCardComponent } from '../components/insurance-card/insurance-card.component';
//import {MatCardModule} from '@angular/material/card';

const appRoutes: Routes = [
  {
    path: 'doctors',
    component: DoctorsComponent
  },
  {
    path: 'insurance',
    component: DoctorInsuranceComponent
  },
  {
    path: 'map',
    component: GoogleApiComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    DoctorsComponent,
    GoogleApiComponent,
    DoctorInsuranceComponent,
    HomeComponent,
    PageNotFoundComponent,
    InsuranceCardComponent
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
