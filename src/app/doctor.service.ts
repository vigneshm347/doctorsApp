import { Injectable, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { httpFactory } from '@angular/http/src/http_module';

@Injectable()
export class DoctorService {

  public url;
  public result;
  constructor(private http: Http) { }

  getDoctor(lat, long){
    this.url = `https://api.betterdoctor.com/2016-03-01/doctors?location=${lat}%2C${long}%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=cec273b20e42d8d889b41559be8d8175`;
    return this.http.get(this.url);
  }
}
