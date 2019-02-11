import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class DoctorInsuranceService {

  public url = "https://api.vericred.com/providers?search_term=Foo&zip_code=11215";
  public result;
  constructor(private http: Http) { }

  getInsurance(){
    const options = new RequestOptions();
    options.headers = new Headers();
    options.headers.append('vericred-api-key', 'cc11f44ae168b4f4659108742f90534f');
    return this.http.get(this.url, options);
  }
}
