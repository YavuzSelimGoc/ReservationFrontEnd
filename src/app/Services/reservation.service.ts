import { ReservationDto } from './../Models/reservationDto';
import { ResponseModel_Data } from './../models/responseModel_Data';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../Models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  apiUrls=environment.apiUrl;
  constructor(private httpClient:HttpClient) { }

  add(reservation:Reservation){
    let newPath=this.apiUrls+"reservation/add";
    return this.httpClient.post(newPath,reservation)
   }
   getReservation():Observable<ListResponseModel<Reservation>>{
    let newPath=this.apiUrls+"reservation/getall";
    return this.httpClient.get<ListResponseModel<Reservation>>(newPath)
  }
  getReservationActive():Observable<ListResponseModel<Reservation>>{
    let newPath=this.apiUrls+"reservation/getallActive";
    return this.httpClient.get<ListResponseModel<Reservation>>(newPath)
  }
  getReservationById(reservationID):Observable <ResponseModel_Data<Reservation>> {
    let newPath=this.apiUrls + "reservation/GetById/?id="+reservationID
    return this.httpClient
       .get<ResponseModel_Data<Reservation>>(newPath);
   }
   getReservationByUserNameForCustomer(userName):Observable <ListResponseModel<ReservationDto>> {
    let newPath=this.apiUrls + "reservation/getByUserNameForCustomer/?userName="+userName
    return this.httpClient
       .get<ListResponseModel<ReservationDto>>(newPath);
   }
   getReservationByUserNameForCustomerActive(userName):Observable <ListResponseModel<ReservationDto>> {
    let newPath=this.apiUrls + "reservation/getByUserNameForCustomerActive/?userName="+userName
    return this.httpClient
       .get<ListResponseModel<ReservationDto>>(newPath);
   }
   getReservationByUserNameForBusiness(userName):Observable <ListResponseModel<ReservationDto>> {
    let newPath=this.apiUrls + "reservation/getByUserNameForBusiness/?userName="+userName
    return this.httpClient
       .get<ListResponseModel<ReservationDto>>(newPath);
   }
   getReservationByUserNameForBusinessActive(userName):Observable <ListResponseModel<ReservationDto>> {
    let newPath=this.apiUrls + "reservation/getByUserNameForBusinessActive/?userName="+userName
    return this.httpClient
       .get<ListResponseModel<ReservationDto>>(newPath);
   }
  delete(reservation:Reservation){
    let newPath=this.apiUrls + "reservation/delete"
    return this.httpClient.post(newPath,reservation)
   }
   passive(reservation:Reservation){
    let newPath=this.apiUrls + "reservation/passive"
    return this.httpClient.post(newPath,reservation)
   }
   update(reservation:Reservation){
    let newPath=this.apiUrls+"reservation/update";
    return this.httpClient.post(newPath,reservation)
   }
   active(reservation:Reservation){
    let newPath=this.apiUrls + "reservation/active"
    return this.httpClient.post(newPath,reservation)
   }
}