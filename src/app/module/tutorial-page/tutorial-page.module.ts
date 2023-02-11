import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialPageRoutingModule } from './tutorial-page-routing.module';
import { TutorialPageComponent } from './tutorial-page.component';
import { TutorialNavComponent } from './components/tutorial-nav/tutorial-nav.component';
import { TutorialSideNavComponent } from './components/tutorial-side-nav/tutorial-side-nav.component';
import { FooterComponent } from 'src/app/pages/components/footer/footer.component';
import { TutorialPageFooterComponent } from './components/tutorial-page-footer/tutorial-page-footer.component';
import { HtmlComponent } from '../tutorials.module/html/html.component';


@NgModule({
  declarations: [
  TutorialPageComponent,
  TutorialNavComponent,
  TutorialSideNavComponent,
  TutorialPageFooterComponent,
  HtmlComponent

  ],
  imports: [
    CommonModule,
    TutorialPageRoutingModule
  ]
})
export class TutorialPageModule { }
