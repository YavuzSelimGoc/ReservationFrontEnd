import { CustomerService } from './../../Services/customer.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit{
  customerAddForm:FormGroup;
   isTrue:boolean
   public resp: {dbPath:''};
   constructor(private formBuilder:FormBuilder,private toastrService:ToastrService,
     private customerService:CustomerService,private router:Router) { }
   ngOnInit(): void {
    this.createCustomerAddForm()
    
   }
   createCustomerAddForm(){
    this.customerAddForm=this.formBuilder.group({
     userName :["",Validators.required],
     customerPhoneNumber :["",Validators.required],
           customerName:["",Validators.required],
         customerAdress:["",Validators.required],
         customerImage:["",Validators.required],
		 customerDescription:["",Validators.required],
    })
  }
  add(){
    this.customerAddForm.controls['userName'].setValue(localStorage.getItem('userName'));
    this.customerAddForm.controls['customerImage'].setValue(this.resp.dbPath);
    console.log(this.customerAddForm.value)
    if(this.customerAddForm.valid){
      let customerModel =Object.assign({},this.customerAddForm.value) 
      this.customerService.add(customerModel).subscribe(response=>{
//        localStorage.setItem('userType',"business")
        this.router.navigate(["/login"])
        this.toastrService.success("Müşteri Kayıt İşlemi Başarılı","Tebrikler")
      
      });
    }
    else {
      console.log("İşletme Eklenemedi");
        this.toastrService.error("Müşteri Kayıt İşlemi Başarısız","Hata")
    }  
   
  }
 

 uploadFinished = (event) => { 
   this.resp = event; 
 }

  createImgPath = (serverPath: string) => { 
   return environment.imgUrl+`${serverPath}`; 
   
 }
}
