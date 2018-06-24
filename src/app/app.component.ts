import { Component } from '@angular/core';


import {HotelDataServicService} from './hotel-data-servic.service';
import {hotel} from './hotelDatamodel';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  colors = ['Red','Green','Blue'];
  hotels: hotel[];
  constructor(private hotelService : HotelDataServicService){
    this.hotelService.getHotelData
  }
  
}
