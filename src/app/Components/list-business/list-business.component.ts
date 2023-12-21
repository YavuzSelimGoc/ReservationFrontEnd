import { BusinessDto } from './../../Models/businessDto';
import { Business } from 'src/app/models/business';
import { BusinessService } from './../../Services/business.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-list-business',
  templateUrl: './list-business.component.html',
  styleUrls: ['./list-business.component.scss']
})
export class ListBusinessComponent implements OnInit {
  businesses:BusinessDto[]
  business:Business
  filtertext="";
  constructor(private businessService:BusinessService){ }
  ngOnInit(): void {
  this.getBusiness()
  }

  getBusiness() {
    this.businessService.getBusinessDto().subscribe(repsonse => {
      this.businesses = repsonse.data  
      this.businesses.forEach(business => {
        if(business.businessDescription.length>=50)
        business.businessDescription=business.businessDescription.slice(0,45)+'(...)'
      });
    })
  }
  deleteBox(business:BusinessDto)
  {
    Swal.fire({
      title:"Emin Misiniz",
      text:"Silmek İstediğinize Emin Misiniz  ?",
      icon:"warning",
      showCancelButton:true,
      confirmButtonText:'Evet, Silinsin',
      cancelButtonText:'Hayır, Silinmesin'
    }).then((result=>{
      if(result.value){
        Swal.fire("Sil","Silme işlemi başarılı","success")
        this.delete(business);
        setTimeout(window.location.href="/admin/list-business",3000);
        
       
      }
      else if (result.dismiss===Swal.DismissReason.cancel){
        Swal.fire("Sil!","Silme İşleminden Vazgeçildi","error")
      }
    }))
  }
  delete(businessDto:BusinessDto){
    this.businessService.getBusinessById(businessDto.businessId).subscribe(repsonse => {
      this.business = repsonse.data
    this.businessService.delete(this.business).subscribe(response=>{
    });
  })
  }
  passive(businessDto:BusinessDto){
    this.businessService.getBusinessById(businessDto.businessId).subscribe(repsonse => {
      this.business = repsonse.data
    this.businessService.passive(this.business).subscribe(response=>{
    });
  })
  }
  active(businessDto:BusinessDto){
    this.businessService.getBusinessById(businessDto.businessId).subscribe(repsonse => {
      this.business = repsonse.data
    this.businessService.active(this.business).subscribe(response=>{
    });
  })
  }
}
