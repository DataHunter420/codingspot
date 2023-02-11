import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignupPageComponent } from './pages/signup-page/signup-page.component';
import { LandingPageNavComponent } from './pages/components/landing-page-nav/landing-page-nav.component';
import { FooterComponent } from './pages/components/footer/footer.component';
import {ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginPageComponent,
    SignupPageComponent,
    LandingPageNavComponent,
    FooterComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut:2000,
      positionClass:'toast-top-right'
    }) 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
