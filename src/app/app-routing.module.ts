import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { TutorialPageComponent } from './module/tutorial-page/tutorial-page.component';

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
  path:'tutorial-page/html',
  component:TutorialPageComponent,
  loadChildren:()=> import('../app/module/tutorial-page/tutorial-page-routing.module').then((m)=>m.TutorialPageRoutingModule)

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
