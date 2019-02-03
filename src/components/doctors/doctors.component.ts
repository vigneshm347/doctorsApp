import { Component, OnInit } from '@angular/core';
import {DoctorService} from '../../app/doctor.service';
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
  constructor(private doctorService: DoctorService) { }

  ngOnInit() {
    this.doctorService.getDoctor().subscribe((res) => {
      this.response = res.json();
      this.doctors = this.response.data;
      console.log(this.doctors);
      this.doctorProfile = this.getProfile();
    },
    error => console.log(error)
    );
  }

  getProfile(){
   return this.doctors.map(item=>item.profile);
  }
  }
