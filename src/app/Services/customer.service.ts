import { ResponseModel_Data } from './../models/responseModel_Data';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrls=environment.apiUrl;
  constructor(private httpClient:HttpClient) { }

  add(customer:Customer){
    let newPath=this.apiUrls+"customer/add";
    return this.httpClient.post(newPath,customer)
   }
   getCustomer():Observable<ListResponseModel<Customer>>{
    let newPath=this.apiUrls+"customer/getall";
    return this.httpClient.get<ListResponseModel<Customer>>(newPath)
  }
  getCustomerActive():Observable<ListResponseModel<Customer>>{
    let newPath=this.apiUrls+"customer/getallActive";
    return this.httpClient.get<ListResponseModel<Customer>>(newPath)
  }
  getCustomerById(customerID):Observable <ResponseModel_Data<Customer>> {
    let newPath=this.apiUrls + "customer/GetById/?id="+customerID
    return this.httpClient
       .get<ResponseModel_Data<Customer>>(newPath);
   }
   getCustomerByUserName(userName):Observable <ResponseModel_Data<Customer>> {
    let newPath=this.apiUrls + "customer/GetByUserName/?userName="+userName
    return this.httpClient
       .get<ResponseModel_Data<Customer>>(newPath);
   }
  delete(customer:Customer){
    let newPath=this.apiUrls + "customer/delete"
    return this.httpClient.post(newPath,customer)
   }
   passive(customer:Customer){
    let newPath=this.apiUrls + "customer/passive"
    return this.httpClient.post(newPath,customer)
   }
   update(customer:Customer){
    let newPath=this.apiUrls+"customer/update";
    return this.httpClient.post(newPath,customer)
   }
   active(customer:Customer){
    let newPath=this.apiUrls + "customer/active"
    return this.httpClient.post(newPath,customer)
   }
}