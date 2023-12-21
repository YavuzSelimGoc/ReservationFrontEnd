import { TokenInterceptorService } from './Services/token-interceptor.service';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicLayoutComponent } from './Components/public-layout/public-layout.component';
import { PrivateLayoutComponent } from './Components/private-layout/private-layout.component';
import { LoginLayoutComponent } from './Components/login-layout/login-layout.component';
import { MainComponent } from './Components/main/main.component';
import { HeaderComponent } from './Components/header/header.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { UploadsComponent } from './Components/uploads/uploads.component';
import { HeaderPublicComponent } from './Components/header-public/header-public.component';
import { PropertyDetailsComponent } from './Components/property-details/property-details.component';
import { BestDealComponent } from './Components/best-deal/best-deal.component';
import { FooterPublicComponent } from './Components/footer-public/footer-public.component';
import { PropertiesComponent } from './Components/properties/properties.component';
import { AddBusinessComponent } from './Components/add-business/add-business.component';
import { AddCategoryComponent } from './Components/add-category/add-category.component';
import { ListCategoryComponent } from './Components/list-category/list-category.component';
import { UpdateCategoryComponent } from './Components/update-category/update-category.component';
import { ListBusinessComponent } from './Components/list-business/list-business.component';
import { UpdateBusinessComponent } from './Components/update-business/update-business.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { AddBusinessPublicComponent } from './Components/add-business-public/add-business-public.component';
import { AddCustomerComponent } from './Components/add-customer/add-customer.component';
import { ListCustomerComponent } from './Components/list-customer/list-customer.component';
import { UpdateCustomerComponent } from './Components/update-customer/update-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicLayoutComponent,
    PrivateLayoutComponent,
    LoginLayoutComponent,
    MainComponent,
    HeaderComponent,
    NavbarComponent,
    UploadsComponent,
    HeaderPublicComponent,
    PropertyDetailsComponent,
    BestDealComponent,
    FooterPublicComponent,
    PropertiesComponent,
    AddBusinessComponent,
    AddCategoryComponent,
    ListCategoryComponent,
    UpdateCategoryComponent,
    ListBusinessComponent,
    UpdateBusinessComponent,
    LoginComponent,
    RegisterComponent,
    AddBusinessPublicComponent,
    AddCustomerComponent,
    ListCustomerComponent,
    UpdateCustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,    
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
