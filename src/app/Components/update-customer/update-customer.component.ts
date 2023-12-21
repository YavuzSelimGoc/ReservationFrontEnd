import { CustomerService } from './../../Services/customer.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Customer } from '../../models/customer';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.scss']
})
export class UpdateCustomerComponent implements OnInit{
  customerUpdateForm:FormGroup
  sayac=0
  customer:Customer;
  customerImage:string
  public resp: {dbPath:''};
  customerId:number
  constructor(
    private formBuilder:FormBuilder,private activatedroute:ActivatedRoute,private router:Router,private customerService:CustomerService) { this.createCustomerForm() }
    ngOnInit(): void {
      this.activatedroute.params.subscribe(params=>{
        if(params["customerId"]){
          this.customerId=params["customerId"]
          this.getCustomerById(params["customerId"])
          }
        else{this.getCustomerById(params["customerId"])}
        this.customerId=params["customerId"]
        })
    }
    getCustomerById(customerId:number){
      this.customerService.getCustomerById(customerId).subscribe((response) => {
        this.customer=response.data;
        this.customerImage=this.customer.customerImage
        this.createCustomerUpdateForm();
      });
    }

    createCustomerForm(){
      this.customerUpdateForm=this.formBuilder.group({
        customerId :["",Validators.required],
             customerName:["",Validators.required],
             userName:["",Validators.required],
           customerAdress:["",Validators.required],
           customerImage:["",Validators.required],
           customerPhoneNumber:["",Validators.required],
       customerDescription:["",Validators.required],
       customerStatus:["",Validators.required],
      })
    }

    updateBox()
    {
      Swal.fire({
        title:"Emin Misiniz",
        text:"Güncellemek İstediğinize Emin Misiniz ?",
        icon:"warning",
        showCancelButton:true,
        confirmButtonText:'Evet, Güncellensin',
        cancelButtonText:'Hayır, Güncellenmesin'
      }).then((result=>{
        if(result.value){
          Swal.fire("Güncellendi","Güncelleme işlemi başarılı","success")
          this.update();
         
        }
        else if (result.dismiss===Swal.DismissReason.cancel){
          Swal.fire("Güncellenmedi!","Güncelleme İşleminden Vazgeçildi","error")
        }
      }))
    }

    update(){
      if(this.sayac===0)
      { this.resp={
        dbPath:null
      }
      this.customerUpdateForm.controls['customerImage'].setValue(this.customerImage);
      if(this.customerUpdateForm.valid){
        let customerModel =Object.assign({},this.customerUpdateForm.value) 
        this.customerService.update(customerModel).subscribe(response=>{
          this.router.navigate(["/admin/list-customer"])
          
        });
      }
      else {
        
      } }
      else if(this.sayac!==0){
        this.customerUpdateForm.controls['customerImage'].setValue(this.resp.dbPath);
      if(this.customerUpdateForm.valid){
        let customerModel =Object.assign({},this.customerUpdateForm.value) 
        this.customerService.update(customerModel).subscribe(response=>{
          this.router.navigate(["/admin/list-customer"])
        });
      }
      else {} 
      }
     
    }
    createCustomerUpdateForm(){
      this.customerUpdateForm=this.formBuilder.group({
        customerId :[this.customer.customerId],
        userName :[this.customer.userName],
             customerName:[this.customer.customerName],
           customerAdress:[this.customer.customerAdress],
           customerImage:[this.customer.customerImage],
           customerPhoneNumber:[this.customer.customerPhoneNumber],
       customerDescription:[this.customer.customerDescription],
       customerStatus:[this.customer.customerStatus],
      })
    }
    uploadFinished = (event) => { 
      this.sayac++
        this.resp = event; 
    }
  
     createImgPath = (serverPath: string) => { 
      return environment.imgUrl+`${serverPath}`; 
    }

}
