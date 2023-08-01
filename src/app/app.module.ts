import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { FormComponent } from './form/form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClaimComponent } from './claim/claim.component';
import { HomeComponent } from './home/home.component';
import { PaymentComponent } from './payment/payment.component';
import { LoginNewComponent } from './login-new/login-new.component';
import { FetchComponent } from './fetch/fetch.component';
import { ClaimDashComponent } from './claim-dash/claim-dash.component';
import { ClaimInformationComponent } from './claim-information/claim-information.component';
import { ExisitingComponent } from './exisiting/exisiting.component';
import { ExistingLoginComponent } from './existing-login/existing-login.component';
import { ExistingFormComponent } from './existing-form/existing-form.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormComponent,
    DashboardComponent,
    ClaimComponent,
    HomeComponent,
    PaymentComponent,
    LoginNewComponent,
    FetchComponent,
    ClaimDashComponent,
    ClaimInformationComponent,
    ExisitingComponent,
    ExistingLoginComponent,
    ExistingFormComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
