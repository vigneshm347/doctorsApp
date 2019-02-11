import { Component, OnInit } from '@angular/core';
import {DoctorInsuranceService} from '../../app/doctor-insurance.service';

@Component({
  selector: 'app-doctor-insurance',
  templateUrl: './doctor-insurance.component.html',
  styleUrls: ['./doctor-insurance.component.css']
})
export class DoctorInsuranceComponent implements OnInit {
  public response: any;
  constructor(public ins: DoctorInsuranceService) { }

  ngOnInit() {
    this.ins.getInsurance().subscribe(
      (res)=>{
        this.response = res.json();
        console.log(this.response.providers);
      }
    );
  }

}
