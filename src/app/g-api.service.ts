import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class GApiService {

  public url = "https://maps.googleapis.com/maps/api/directions/json?origin=Toronto&destination=Montreal&key=AIzaSyC6hMKUSKzmNF3zMuU1E8mTuwgb5DlXkMA";
  public result;
  constructor(private http: Http) { }

  getLocation(){
    const options = new RequestOptions();
    options.headers = new Headers();
    options.headers.append('Access-Control-Allow-Origin', '*');
    options.headers.append('Access-Control-Allow-Methods', "['options', 'GET', 'POST']");
    options.headers.append('Access-Control-Allow-Headers', 'Content-Type')
    return this.http.get(this.url, options);

  }

}
