import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/authService';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent {
  isUser:boolean = false;
  userToken:string = "";

  constructor(private authService:AuthService){
    this.isUser = this.authService.isAuthenticated();
    this.userToken = localStorage.getItem("accessToken") as string
    console.log("this.userToken ====>" , this.userToken)
  }

  logout(){
    this.authService.clearUser();
    window.location.reload();
  }

}
