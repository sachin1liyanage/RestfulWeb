import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelDataServicService {

  constructor(private http : HttpClient) { }

  /* sends get request and returns its response table */ 

  getHotelData(){
    return this
              .http
              .get('https://my-json-server.typicode.com/sachin1liyanage/RestfulWeb/markers');
  }
}
