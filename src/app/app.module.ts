import { TokenInterceptorService } from './Services/token-interceptor.service';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { EditorModule , TINYMCE_SCRIPT_SRC  } from '@tinymce/tinymce-angular';


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
import { ListActiveReservationComponent } from './Components/list-active-reservation/list-active-reservation.component';
import { ListReservationComponent } from './Components/list-reservation/list-reservation.component';
import { BusinessDtoPipe } from './pipes/business-dto.pipe';
import { CustomerPipe } from './pipes/customer.pipe';
import { ReservationDtoPipe } from './pipes/reservation-dto.pipe';
import { AboutComponent } from './Components/about/about.component';
import { ContactComponent } from './Components/contact/contact.component';

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
    ListActiveReservationComponent,
    ListReservationComponent,
    BusinessDtoPipe,
    CustomerPipe,
    ReservationDtoPipe,
    AboutComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    EditorModule,
    ReactiveFormsModule,    
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}],
    bootstrap: [AppComponent]
})
export class AppModule { }
