import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ResponseData } from '../modals/response';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() { }

  storeUser(userData:any){
    localStorage.setItem("email", userData.email);
    localStorage.setItem("accessToken", userData.accessToken);
  }

  clearUser(){
    localStorage.removeItem("email");
    localStorage.removeItem("accessToken");
  }

  // getUser(){
  //   const user = localStorage.getItem("user");
  //   return user;
  // }

  isAuthenticated(){
    const email = localStorage.getItem("email");
    const accessToken = localStorage.getItem("accessToken");
    //const user = this.getUser();
    if(email != undefined && accessToken != undefined){
        return true
    }else{
        return false;
    }
  }
}