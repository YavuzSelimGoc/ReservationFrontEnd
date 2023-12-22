import { ToastrService } from 'ngx-toastr';
import { ReservationService } from './../../Services/reservation.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BusinessService } from 'src/app/Services/business.service';
import { Component, OnInit } from '@angular/core';
import { Business } from 'src/app/models/business';
import { environment } from 'src/environments/environment';
import { TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
declare var window:any;


@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent implements OnInit{
  formModel:any;
  business:Business
  reservationAddForm:FormGroup;
  businessId:number
  businessUserName:string
  constructor(private formBuilder:FormBuilder,private businessService:BusinessService,private toastrService:ToastrService,private reservationService:ReservationService ,private activatedroute:ActivatedRoute,private router:Router){ }
  ngOnInit(): void {

    this.activatedroute.params.subscribe(params=>{
      if(params["propertyId"]){
        this.businessId=params["propertyId"]
        this.getBusinessById(params["propertyId"])
        this.createReservationAddForm()
        this.formModel= new window.bootstrap.Modal(
          document.getElementById("exampleModal")
        );
      }
      else{
        this.getBusinessById(params["propertyId"])
        this.createReservationAddForm()
        this.formModel= new window.bootstrap.Modal(
          document.getElementById("exampleModal")
        );
      }
      })  
     }
     createReservationAddForm(){
      this.reservationAddForm=this.formBuilder.group({
        businessUserName:["",Validators.required],
        customerUserName:["",Validators.required],
        reservationDescription:["",Validators.required],
       
      })
    }

    add(){
      this.reservationAddForm.controls['businessUserName'].setValue(this.businessUserName);
      this.reservationAddForm.controls['customerUserName'].setValue(localStorage.getItem('userName'));
      if(this.reservationAddForm.valid){
        let categoryModel =Object.assign({},this.reservationAddForm.value) 
        this.reservationService.add(categoryModel).subscribe(response=>{
          this.router.navigate(["/admin/list-reservation"])
          this.toastrService.success("Rezervasyon İsteğiniz Gönderilmiştir","Tebrikler")
          this.formModel.hide();
        });
      }
      else {
        this.toastrService.error("Rezervasyon İsteği Başarısız Önce Giriş Yapınız","Hata")
      } 
    }
    openModel(){
      this.formModel.show();
    }
  closeModel(){
    this.formModel.hide();
  }

  getBusinessById(businessId:number) {
    this.businessService.getBusinessById(businessId).subscribe(repsonse => {
      this.business = repsonse.data  
      this.businessUserName=repsonse.data.userName
    })
  }
  createImgPath = (serverPath: string) => { 
    return environment.imgUrl+`${serverPath}`; 
  }

}
