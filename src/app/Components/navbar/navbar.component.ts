import { CustomerService } from './../../Services/customer.service';
import { BusinessService } from 'src/app/Services/business.service';
import { Business } from 'src/app/models/business';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../models/customer';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  constructor(private businessService:BusinessService,private customerService:CustomerService) {  }
   
  userType:string
  customerId:number
  businessId:number
  customer:Customer
  business:Business
  ngOnInit(): void {
  
    const deger = localStorage.getItem('userType')
   this.userType=deger as string;
   this.getBusinessById()
   this.getCustomerById()
  }
  getBusinessById(){
    this.businessService.getBusinessByUserName(localStorage.getItem('userName')).subscribe((response) => {
      this.business=response.data;
     this.businessId=response.data.businessId
    });
  }
  getCustomerById(){
    this.customerService.getCustomerByUserName(localStorage.getItem('userName')).subscribe((response) => {
      this.customer=response.data;
      this.customerId=response.data.customerId
      console.log(this.customer)
    });
  }
    

}
