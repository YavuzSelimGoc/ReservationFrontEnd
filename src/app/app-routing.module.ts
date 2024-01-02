import { ContactComponent } from './Components/contact/contact.component';
import { AboutComponent } from './Components/about/about.component';
import { LoginGuard } from './Guards/login.guard';
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
      {path:"about",pathMatch:"full",component:AboutComponent},
      {path:"contact",pathMatch:"full",component:ContactComponent},
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
    path: "admin", component: PrivateLayoutComponent ,canActivate:[LoginGuard], children: [

      {path:"add-category",pathMatch:"full",component:AddCategoryComponent, canActivate:[LoginGuard]},
      {path:"add-business",pathMatch:"full",component:AddBusinessComponent,canActivate:[LoginGuard]},
      {path:"list-category",pathMatch:"full",component:ListCategoryComponent ,canActivate:[LoginGuard]},
      {path:"list-customer",pathMatch:"full",component:ListCustomerComponent ,canActivate:[LoginGuard]},
      {path:"list-business",pathMatch:"full",component:ListBusinessComponent ,canActivate:[LoginGuard]},
      {path:"list-active-reservation",pathMatch:"full",component:ListActiveReservationComponent ,canActivate:[LoginGuard]},
      {path:"list-reservation",pathMatch:"full",component:ListReservationComponent ,canActivate:[LoginGuard]},
      {path:"update-category/:categoryId",component:UpdateCategoryComponent ,canActivate:[LoginGuard]},
      {path:"update-business/:businessId",component:UpdateBusinessComponent ,canActivate:[LoginGuard]},
      {path:"update-customer/:customerId",component:UpdateCustomerComponent ,canActivate:[LoginGuard]},
   
    ]
  }



 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }