import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { BusinessService } from 'src/app/Services/business.service';
import { Component, OnInit } from '@angular/core';
import { Business } from 'src/app/models/business';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent implements OnInit{
  business:Business
  businessId:number
  constructor(private formBuilder:FormBuilder,private businessService:BusinessService,private activatedroute:ActivatedRoute,private router:Router){ }
  ngOnInit(): void {
    this.activatedroute.params.subscribe(params=>{
      if(params["propertyId"]){
        this.businessId=params["propertyId"]
        this.getBusinessById(params["propertyId"])}
      else{
        this.getBusinessById(params["propertyId"])
      }
      })   }

  getBusinessById(businessId:number) {
    this.businessService.getBusinessById(businessId).subscribe(repsonse => {
      this.business = repsonse.data  
    })
  }
  createImgPath = (serverPath: string) => { 
    return environment.imgUrl+`${serverPath}`; 
  }

}
