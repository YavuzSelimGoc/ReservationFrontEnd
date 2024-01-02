import { Component, OnInit } from '@angular/core';
import { ReservationDto } from 'src/app/Models/reservationDto';
import { ReservationService } from 'src/app/Services/reservation.service';

@Component({
  selector: 'app-list-reservation',
  templateUrl: './list-reservation.component.html',
  styleUrls: ['./list-reservation.component.scss']
})
export class ListReservationComponent implements OnInit {
  reservations:ReservationDto[]
  userType:string
  filtertext="";
  constructor(private reservationService:ReservationService){ }
  ngOnInit(): void {
  this.getReservation()
  this.userType=localStorage.getItem('userType')
  }
  getReservation() {
    if(localStorage.getItem('userType')==='business'){
      this.reservationService.getReservationByUserNameForBusiness(localStorage.getItem('userName')).subscribe(repsonse => {
        this.reservations = repsonse.data  
        console.log(this.reservations)
      })
    }
    else if(localStorage.getItem('userType')==='customer'){
      this.reservationService.getReservationByUserNameForCustomer(localStorage.getItem('userName')).subscribe(repsonse => {
        this.reservations = repsonse.data  
        console.log(this.reservations)

      })
    }
    else if(localStorage.getItem('userType')==='admin'){
      this.reservationService.getReservationDto().subscribe(repsonse => {
        this.reservations = repsonse.data  
        console.log(this.reservations)

      })
    }
  }
}
