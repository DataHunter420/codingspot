import { Component } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  private userdata:any

  constructor(private builder:FormBuilder, private toastr:ToastrService, private router:Router,private service:AuthService){

  }

  loginform = this.builder.group({
    Username:this.builder.control('',Validators.compose([Validators.required,Validators.email])),
    Password:this.builder.control('',Validators.compose([Validators.required,Validators.minLength(5)])),

  })

  loginWithEmailAndPassword(){
    if(this.loginform.valid){
      this.service.Getbyemail(this.loginform.value.Username).subscribe({
        next:(res)=>{
          this.userdata = res;
          console.log(this.userdata);
          if (this.userdata.password == this.loginform.value.Password) {
            if (this.userdata.isactive) {
              this.toastr.success('Log in Successfully', 'Success');
              sessionStorage.setItem('username', this.userdata.id);
              sessionStorage.setItem('userrole', this.userdata.role);
              this.router.navigate(['user'])
  
            }
            else {
              this.toastr.error('Please activate your account', 'Invalid crendentials');
            }
          }
          else{
            this.toastr.error('Please enter correct password', 'Invalid Password');
            
          }
        },
        error:(err)=>{
          if(err.statusText == "Not Found"){
            alert(err.statusText)
            //this.toastr.error('User Not Found', 'Please check credentials!');
            return
          }
          alert(err.statusText);
        }
        });
        
      }
    }

  

}
