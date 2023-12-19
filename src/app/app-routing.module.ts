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


const routes: Routes = [
  {
    path: "", component: PublicLayoutComponent, children: [
      {path:"",pathMatch:"full",component:MainComponent},
      {path:"property-details",pathMatch:"full",component:PropertyDetailsComponent},
      {path:"property",pathMatch:"full",component:PropertiesComponent},
 
    ]
  },
  {
    path: "login", component: LoginLayoutComponent, children: [
   
    ]
  },
  {
    path: "admin", component: PrivateLayoutComponent, children: [

      {path:"add-category",pathMatch:"full",component:AddCategoryComponent},
      {path:"add-business",pathMatch:"full",component:AddBusinessComponent},
      {path:"list-category",pathMatch:"full",component:ListCategoryComponent},
      {path:"list-business",pathMatch:"full",component:ListBusinessComponent},
      {path:"update-category/:categoryId",component:UpdateCategoryComponent},
      {path:"update-business/:businessId",component:UpdateBusinessComponent},
   
    ]
  }



 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }