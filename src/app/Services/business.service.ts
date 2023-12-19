import { ResponseModel_Data } from './../models/responseModel_Data';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Business } from '../models/business';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  apiUrls=environment.apiUrl;
  constructor(private httpClient:HttpClient) { }

  add(business:Business){
    let newPath=this.apiUrls+"business/add";
    return this.httpClient.post(newPath,business)
   }
   getBusiness():Observable<ListResponseModel<Business>>{
    let newPath=this.apiUrls+"business/getall";
    return this.httpClient.get<ListResponseModel<Business>>(newPath)
  }
  getBusinessActive():Observable<ListResponseModel<Business>>{
    let newPath=this.apiUrls+"business/getallActive";
    return this.httpClient.get<ListResponseModel<Business>>(newPath)
  }
  getBusinessById(businessID):Observable <ResponseModel_Data<Business>> {
    let newPath=this.apiUrls + "business/GetById/?id="+businessID
    return this.httpClient
       .get<ResponseModel_Data<Business>>(newPath);
   }
  delete(business:Business){
    let newPath=this.apiUrls + "business/delete"
    return this.httpClient.post(newPath,business)
   }
   passive(business:Business){
    let newPath=this.apiUrls + "business/passive"
    return this.httpClient.post(newPath,business)
   }
   update(business:Business){
    let newPath=this.apiUrls+"business/update";
    return this.httpClient.post(newPath,business)
   }
   active(business:Business){
    let newPath=this.apiUrls + "business/active"
    return this.httpClient.post(newPath,business)
   }
}