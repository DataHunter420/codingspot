import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';

const routes: Routes = [
  {
    path:'',
  component:LandingPageComponent
 },
 {
  path:'login',
  component:LoginPageComponent
 },
 {
  path:'signup',
  component:SignupPageComponent
 },
 {
  path:'**',
  redirectTo:''
  
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
