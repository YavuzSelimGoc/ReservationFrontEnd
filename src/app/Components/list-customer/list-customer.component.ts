import { CustomerService } from './../../Services/customer.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Customer } from '../../models/customer';


@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {
  customers:Customer[]
  filtertext="";
  constructor(private customerService:CustomerService){ }
  ngOnInit(): void {
  this.getBusiness()
  }

  getBusiness() {
    this.customerService.getCustomer().subscribe(repsonse => {
      this.customers = repsonse.data  
      this.customers.forEach(customer => {
        if(customer.customerDescription.length>=50)
        customer.customerDescription=customer.customerDescription.slice(0,45)+'(...)'
      });
    })
  }
  deleteBox(customer:Customer)
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
        this.delete(customer);
        setTimeout(window.location.href="/admin/list-business",3000);
        
       
      }
      else if (result.dismiss===Swal.DismissReason.cancel){
        Swal.fire("Sil!","Silme İşleminden Vazgeçildi","error")
      }
    }))
  }
  delete(customer:Customer){

    this.customerService.delete(customer).subscribe(response=>{
    });
  }
  passive(customer:Customer){
   
    this.customerService.passive(customer).subscribe(response=>{
    });
  
  }
  active(customer:Customer){
  
    this.customerService.active(customer).subscribe(response=>{
    });

  }

}
