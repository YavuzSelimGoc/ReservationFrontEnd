import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
    PropertiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
