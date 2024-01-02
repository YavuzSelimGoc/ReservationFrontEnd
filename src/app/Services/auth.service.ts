import { User } from './../Models/user';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Login } from '../Models/login';
import { SingleResponseModel } from '../Models/singleresponse';
import { TokenModel } from '../Models/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.apiUrl;

  private token: string;

  setTokenData(data: string) {
    this.token = data;
  }

  getTokenData() {
    return this.token;
  }

  constructor(private httpclient:HttpClient) { }
  login(loginModel:Login){
    return this.httpclient.post<TokenModel>
    (this.apiUrl+"api/auth/login",loginModel)
  }
  register(user:User){
    let newPath=this.apiUrl+"api/Auth/register";
    return this.httpclient.post(newPath,user)
   }
  
  isAuthenticated(){
    if(localStorage.getItem('token')){
      return true;
    }
    else{
      return false;
    }
  }
}