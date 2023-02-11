import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialPageRoutingModule } from './tutorial-page-routing.module';
import { TutorialPageComponent } from './tutorial-page.component';
import { TutorialNavComponent } from '../tutorial-nav/tutorial-nav.component';
import { TutorialSideNavComponent } from '../tutorial-side-nav/tutorial-side-nav.component';
import { FooterComponent } from 'src/app/pages/components/footer/footer.component';
import { TutorialPageFooterComponent } from '../tutorial-page-footer/tutorial-page-footer.component';


@NgModule({
  declarations: [
  TutorialPageComponent,
  TutorialNavComponent,
  TutorialSideNavComponent,
  TutorialPageFooterComponent

  ],
  imports: [
    CommonModule,
    TutorialPageRoutingModule
  ]
})
export class TutorialPageModule { }
