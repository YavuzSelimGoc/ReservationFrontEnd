import { AuthService } from './../../Services/auth.service';
import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm:FormGroup
  registerForm:FormGroup
  constructor(private formBuilder:FormBuilder,private elementRef: ElementRef,private authService:AuthService,private router:Router ,private toastrService:ToastrService) { }
  ngOnInit() {

    this.createLoginForm()
}
createLoginForm(){
  this.loginForm = this.formBuilder.group({
    userName: ["",Validators.required],
    password:["",Validators.required]
  })
}

login(){
  if(this.loginForm.valid){
      
    let loginModel = Object.assign({},this.loginForm.value)
    this.authService.login(loginModel).subscribe(response=>{
      this.toastrService.success("Giriş İşlemi Başarılı")
      this.authService.setTokenData(response.token)
      localStorage.setItem("token",response.token),
      localStorage.setItem("userName",response.userName)
      localStorage.setItem("userType",response.userType)
      this.router.navigate(["/admin"])
    },responseError=>{
      console.log(responseError)
      // this.toastrService.error("Giriş Bilgileri Yanlış")
      this.toastrService.error("Giriş Bilgileri Yanlış")
    })
  }
}
}
