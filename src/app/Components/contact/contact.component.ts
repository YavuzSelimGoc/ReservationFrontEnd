import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../Services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit{
  contactAddForm:FormGroup;
  constructor(private authService:AuthService,private formBuilder:FormBuilder,private toastrService:ToastrService){}

  ngOnInit(): void {
    this.createCategoryAddForm()
   }
   createCategoryAddForm(){
     this.contactAddForm=this.formBuilder.group({
       mail:["",Validators.required],
       message:["",Validators.required],
       name:["",Validators.required],
       subject:["",Validators.required],
     })
   }
sendMail(){
  if(this.contactAddForm.valid){
    let categoryModel =Object.assign({},this.contactAddForm.value) 
    this.authService.Mail(this.contactAddForm.controls['mail'].value,this.contactAddForm.controls['message'].value).subscribe(response=>{
    });
    this.toastrService.success("Mesaj Gönderme İşlemi Başarılı","Tebrikler")

  }
  else {
    console.log("Kategori Eklenemedi");
    this.toastrService.error("Kategori Ekleme İşlemi Başarısız","Hata")
  } 
}
}

