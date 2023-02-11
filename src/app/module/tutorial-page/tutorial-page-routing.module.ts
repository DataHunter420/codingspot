import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HtmlComponent } from '../tutorials.module/html/html.component';
import { TutorialPageComponent } from './tutorial-page.component';
import { TutorialPageModule } from './tutorial-page.module';

const routes: Routes = [

  {
    path:'',
    component:TutorialPageComponent

  },
  {
    path:'**',
    redirectTo:''

  },
  {
    path:'html',
    component:HtmlComponent
  
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialPageRoutingModule { }
