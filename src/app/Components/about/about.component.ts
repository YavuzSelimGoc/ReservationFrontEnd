import { BusinessService } from './../../Services/business.service';
import { Component, OnInit, Renderer2,Injectable } from '@angular/core';
import { Customer } from '../../models/customer';
import { CountUp } from 'countup.js';
import { CustomerService } from '../../Services/customer.service';
import { ReservationService } from '../../Services/reservation.service';

declare var Waypoint: any;

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit{
  private options = {
    useEasing: true,
    useGrouping: true,
    separator: ',',
    decimal: '.',
    prefix: '',
    suffix: '',
  };
  customersCount:number
  businessCount:number
  reservationCount:number
  filtertext="";
  constructor(private customerService:CustomerService,private businessService:BusinessService,private reservationService:ReservationService,private renderer: Renderer2){ }
  ngOnInit(): void {
  this.getCustomer()
  this.getBusiness()
  this.getRez()
  }

  getCustomer() {
    this.customerService.getCustomer().subscribe(repsonse => {
      this.customersCount = repsonse.data.length  
    })
  }
  getBusiness() {
    this.businessService.getBusiness().subscribe(repsonse => {
      this.businessCount = repsonse.data.length  
    })
  }
  getRez() {
    this.reservationService.getReservationDto().subscribe(repsonse => {
      this.reservationCount = repsonse.data.length  
    })
  }

}
