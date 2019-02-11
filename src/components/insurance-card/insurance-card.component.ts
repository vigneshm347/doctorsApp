import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-insurance-card',
  templateUrl: './insurance-card.component.html',
  styleUrls: ['./insurance-card.component.css']
})
export class InsuranceCardComponent implements OnInit {
  @Input() name:string;
  @Input() street: string;
  @Input() city: string;
  @Input() phone: string;
  @Input() organization: string;
  constructor() { }

  ngOnInit() {
   
  }


}
