import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialPageRoutingModule { }
