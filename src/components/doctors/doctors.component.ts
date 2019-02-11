import { Component, OnInit } from '@angular/core';
import {DoctorService} from '../../app/doctor.service';
import {HomeComponent} from '../home/home.component';
import { getTypeNameForDebugging } from '@angular/core/src/facade/lang';


@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {
  public response: any;
  public doctors: any;
  public doctorProfile: any[];
  public latitude: string;
  public longitude: string;
  public isAvailable: boolean;
  constructor(private doctorService: DoctorService) { }

  ngOnInit() {

  }

  getProfile(){
  this.doctorService.getDoctor(this.latitude, this.longitude).subscribe((res) => {
      this.response = res.json();
      this.doctors = this.response.data;
      this.doctors ? this.isAvailable = true : this.isAvailable = false;
      this.doctorProfile = this.doctors.map(item=>item.profile);
    },
    error => console.log(error)
    );
    //doctorService.unsubscribe();
  }
  }
