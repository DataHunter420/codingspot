import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(  private http: HttpClient) { }

  apiurl='http://localhost:3000/users'


  Proceedregister(inputdata:any){
    return this.http.post(this.apiurl+'/',inputdata)
  }

  Getbyemail(username:any){
    return this.http.get(this.apiurl+'/'+username);
  }
}
