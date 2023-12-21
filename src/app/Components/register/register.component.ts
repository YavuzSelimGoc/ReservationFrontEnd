import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{
  registerForm:FormGroup
  constructor(private formBuilder:FormBuilder,private elementRef: ElementRef,private authService:AuthService,private router:Router ,private toastrService:ToastrService) { }
  ngOnInit() {
    const signUpButton = this.elementRef.nativeElement.querySelector('#signUp');
    const signInButton = this.elementRef.nativeElement.querySelector('#signIn');
    const container = this.elementRef.nativeElement.querySelector('#container');

    signUpButton.addEventListener('click', () => {
      container.classList.add('right-panel-active');
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove('right-panel-active');
    });
    this.createRegisterForm()
}
createRegisterForm(){
  this.registerForm = this.formBuilder.group({
    userName: ["",Validators.required],
    password:["",Validators.required],
    lastName:["",Validators.required],
    firstName:["",Validators.required],
    userType:["",Validators.required],
  })
}

registerBusiness(){
  this.registerForm.controls['userType'].setValue("business");
      if(this.registerForm.valid){
        let productModel =Object.assign({},this.registerForm.value) 
        this.authService.register(productModel).subscribe(response=>{
          this.toastrService.success("Kayıt İşlemi Başarılı","Tebrikler")
          localStorage.setItem("userName",this.registerForm.controls['userName'].value)
          this.router.navigate(["add-property"])   
             });
      }
      else {
        console.log("Kullanıcı Eklenemedi");
      } 
}
registerCustomer(){
  this.registerForm.controls['userType'].setValue("customer");
  if(this.registerForm.valid){
        let productModel =Object.assign({},this.registerForm.value) 
        this.authService.register(productModel).subscribe(response=>{
          localStorage.setItem("userName",this.registerForm.controls['userName'].value)
          this.router.navigate(["add-customer"])
        this.toastrService.success("Kayıt İşlemi Başarılı","Tebrikler")
         // window.location.reload() 
        });
      }
      else {
        console.log("Kullanıcı Eklenemedi");
      } 
}



}
