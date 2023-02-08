import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent {

  constructor(private builder:FormBuilder,private toastr:ToastrService, private services:AuthService,
    private router:Router){

  }

  
// accessing all values from sign up 
  registerform = this.builder.group({
    Username:this.builder.control('',Validators.required),
    Email:this.builder.control('',Validators.compose([Validators.required,Validators.email]) ),
    Password:this.builder.control('',Validators.compose([Validators.required,Validators.minLength(5)]) ),

  }) 

  registeruser(){
    //this.toastr.error("got data soccessfully",'checking data')
    if(this.registerform.valid){
      this.services.Proceedregister(this.registerform.value).subscribe({
        next: (res) => {
          console.log(res);
          //this.loading = false;
          this.router.navigate([``]);
        },
        error: (err) => {
          console.log(err);
          this.toastr.warning(err.error.message, err.error.description);
          //this.loading = false;
        },
      })
      
    }
    else{
      console.log('please enter valid data')
    }
    console.log(this.registerform)
  }
}
