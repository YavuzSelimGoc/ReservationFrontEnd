import { ReservationDto } from './../../Models/reservationDto';
import { ReservationService } from './../../Services/reservation.service';
import { Reservation } from './../../Models/reservation';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-active-reservation',
  templateUrl: './list-active-reservation.component.html',
  styleUrls: ['./list-active-reservation.component.scss']
})
export class ListActiveReservationComponent implements OnInit {
  reservations:ReservationDto[]
  reservation:Reservation
  userType:string
  filtertext="";
  constructor(private reservationService:ReservationService){ }
  ngOnInit(): void {
  this.getReservation()
  this.userType=localStorage.getItem('userType')
  }
  getReservation() {
    if(localStorage.getItem('userType')==='business'){
      this.reservationService.getReservationByUserNameForBusinessActive(localStorage.getItem('userName')).subscribe(repsonse => {
        this.reservations = repsonse.data  
        console.log(this.reservations)
      })
    }
    else if(localStorage.getItem('userType')==='customer'){
      this.reservationService.getReservationByUserNameForCustomerActive(localStorage.getItem('userName')).subscribe(repsonse => {
        this.reservations = repsonse.data  
        console.log(this.reservations)

      })
    }
  }
  passive(reservationDto:ReservationDto){
    this.reservationService.getReservationById(reservationDto.reservationId).subscribe(repsonse => {
      this.reservation = repsonse.data
    this.reservationService.passive(this.reservation).subscribe(response=>{
    });
  })
  }
  active(reservationDto:ReservationDto){
    this.reservationService.getReservationById(reservationDto.reservationId).subscribe(repsonse => {
      this.reservation = repsonse.data
    this.reservationService.active(this.reservation).subscribe(response=>{
    });
  })
  }
}
