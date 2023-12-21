import { ListReservationComponent } from './Components/list-reservation/list-reservation.component';
import { UpdateCustomerComponent } from './Components/update-customer/update-customer.component';
import { AddCustomerComponent } from './Components/add-customer/add-customer.component';
import { PropertiesComponent } from './Components/properties/properties.component';
import { PropertyDetailsComponent } from './Components/property-details/property-details.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicLayoutComponent } from './Components/public-layout/public-layout.component';
import { LoginLayoutComponent } from './Components/login-layout/login-layout.component';
import { PrivateLayoutComponent } from './Components/private-layout/private-layout.component';
import { MainComponent } from './Components/main/main.component';
import { AddCategoryComponent } from './Components/add-category/add-category.component';
import { ListCategoryComponent } from './Components/list-category/list-category.component';
import { UpdateCategoryComponent } from './Components/update-category/update-category.component';
import { AddBusinessComponent } from './Components/add-business/add-business.component';
import { ListBusinessComponent } from './Components/list-business/list-business.component';
import { UpdateBusinessComponent } from './Components/update-business/update-business.component';
import { RegisterComponent } from './Components/register/register.component';
import { AddBusinessPublicComponent } from './Components/add-business-public/add-business-public.component';
import { LoginComponent } from './Components/login/login.component';
import { ListCustomerComponent } from './Components/list-customer/list-customer.component';
import { ListActiveReservationComponent } from './Components/list-active-reservation/list-active-reservation.component';


const routes: Routes = [
  {
    path: "", component: PublicLayoutComponent, children: [
      {path:"",pathMatch:"full",component:MainComponent},
      {path:"property-details/:propertyId",pathMatch:"full",component:PropertyDetailsComponent},
      {path:"property",pathMatch:"full",component:PropertiesComponent},
      {path:"add-property",pathMatch:"full",component:AddBusinessPublicComponent},
      {path:"add-customer",pathMatch:"full",component:AddCustomerComponent},
    ]
  },
  {
    path: "login", component: LoginLayoutComponent, children: [
      {path:"register",pathMatch:"full",component:RegisterComponent},
      {path:"",pathMatch:"full",component:LoginComponent},

    ]
  },
  {
    path: "admin", component: PrivateLayoutComponent, children: [

      {path:"add-category",pathMatch:"full",component:AddCategoryComponent},
      {path:"add-business",pathMatch:"full",component:AddBusinessComponent},
      {path:"list-category",pathMatch:"full",component:ListCategoryComponent},
      {path:"list-customer",pathMatch:"full",component:ListCustomerComponent},
      {path:"list-business",pathMatch:"full",component:ListBusinessComponent},
      {path:"list-active-reservation",pathMatch:"full",component:ListActiveReservationComponent},
      {path:"list-reservation",pathMatch:"full",component:ListReservationComponent},
      {path:"update-category/:categoryId",component:UpdateCategoryComponent},
      {path:"update-business/:businessId",component:UpdateBusinessComponent},
      {path:"update-customer/:customerId",component:UpdateCustomerComponent},
   
    ]
  }



 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }