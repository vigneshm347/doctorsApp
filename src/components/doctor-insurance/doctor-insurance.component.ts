import { Component, OnInit } from '@angular/core';
import {DoctorInsuranceService} from '../../app/doctor-insurance.service';

@Component({
  selector: 'app-doctor-insurance',
  templateUrl: './doctor-insurance.component.html',
  styleUrls: ['./doctor-insurance.component.css']
})
export class DoctorInsuranceComponent implements OnInit {
  public response: any;
  public zip: String;
  public insurances: any[];
  public status: number;
  constructor(public ins: DoctorInsuranceService) { }

  ngOnInit() {
    
  }

  public getInsuranceDetails(){

    this.ins.getInsurance(this.zip).subscribe(
      (res)=>{
        this.response = res.json();
          this.insurances = this.response.providers;
          this.status = res.status
        
      },
      (error)=>{
        this.status = error.status;
      }
      )
  }

}
