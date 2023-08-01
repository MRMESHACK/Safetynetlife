import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
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


const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"form",component:FormComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"claim",component:ClaimComponent},
  {path:"home",component:HomeComponent},
  {path:"payment",component:PaymentComponent},
  {path:"login-new",component:LoginNewComponent},
  {path:"fetch",component:FetchComponent},
  {path:"claim-dash",component:ClaimDashComponent},
  {path:"claim-information",component:ClaimInformationComponent},
  {path:"existing",component:ExisitingComponent},
  {path:"existing-login",component:ExistingLoginComponent},
  {path:"existing-form",component:ExistingFormComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
