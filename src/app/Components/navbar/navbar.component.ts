import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { CustomerService } from './../../Services/customer.service';
import { BusinessService } from 'src/app/Services/business.service';
import { Business } from 'src/app/models/business';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Customer } from '../../models/customer';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  constructor(private businessService:BusinessService,private toastrService:ToastrService,private customerService:CustomerService,private router:Router) {  }
  userType:string
  userName:string
  image:string
  @Input() isSwitchOn: boolean;
  customerId:number
  businessId:number
  customer:Customer
  business:Business
  @ViewChild('switch') switchRef: ElementRef;

  ngOnInit(): void {
    const type = localStorage.getItem('userType')
    const name = localStorage.getItem('userName')
   this.userType=type as string;
   this.userName=name as string;
   this.getBusinessById()
   this.getCustomerById()
  }
  logOut(){
    this.router.navigate(["/login"])
    localStorage.clear()
    this.toastrService.info("Güvenli Çıkış Yapıldı","Bilgi")

  }
  getBusinessById(){
    this.businessService.getBusinessByUserName(localStorage.getItem('userName')).subscribe((response) => {
      this.business=response.data;
      this.image=response.data.businessImage
     this.businessId=response.data.businessId
     this.isSwitchOn=!response.data.businessStatus
    });
    
  }
  switchAction() {
    this.isSwitchOn = this.switchRef.nativeElement.checked;
  
    if (this.isSwitchOn) {
      this.passive();
    } else {
      this.active();
    }
  }
  passive(){
    this.businessService.getBusinessByUserName(localStorage.getItem('userName')).subscribe(repsonse => {
      this.business = repsonse.data
    this.businessService.passive(this.business).subscribe(response=>{
      this.toastrService.success('İşletme Tatil Moduna Geçti')
    });
  })
  }
  active(){
    this.businessService.getBusinessByUserName(localStorage.getItem('userName')).subscribe(repsonse => {
      this.business = repsonse.data
    this.businessService.active(this.business).subscribe(response=>{
      this.toastrService.success('İşletme Tatil Modundan Çıktı')
    });
  })
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
