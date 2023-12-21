import { CustomerService } from './../../Services/customer.service';
import { BusinessService } from 'src/app/Services/business.service';
import { Business } from 'src/app/models/business';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  constructor(private businessService:BusinessService,private customerService:CustomerService) {  }
   
  userType:string
  userName:string
  image:string
  customerId:number
  businessId:number
  customer:Customer
  business:Business
  ngOnInit(): void {
  
    const type = localStorage.getItem('userType')
    const name = localStorage.getItem('userName')
   this.userType=type as string;
   this.userName=name as string;
   this.getBusinessById()
   this.getCustomerById()
  }
  getBusinessById(){
    this.businessService.getBusinessByUserName(localStorage.getItem('userName')).subscribe((response) => {
      this.business=response.data;
      this.image=response.data.businessImage
     this.businessId=response.data.businessId
    });
  }
  getCustomerById(){
    this.customerService.getCustomerByUserName(localStorage.getItem('userName')).subscribe((response) => {
      this.customer=response.data;
      this.customerId=response.data.customerId
      this.image=response.data.customerImage

    });
  }
  createImgPath = (serverPath: string) => { 
    return environment.imgUrl+`${serverPath}`; 
    
  }

}
