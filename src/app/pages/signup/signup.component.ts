import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/angularFireAuth';
import { AuthService } from 'src/app/services/authService';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(
    private authService:AuthService,
    private authenticationService: AuthenticationService,
    private router:Router
  ){}
  
  loginForm = new FormGroup({
    username: new FormControl("" , [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required])
  })


  submitDetails(data:any){
    if(this.loginForm.invalid){
      this.loginForm.controls.password.markAllAsTouched();
      this.loginForm.controls.username.markAllAsTouched()
      return
    }
    const email = this.loginForm.value.username as string;
    const password = this.loginForm.value.password as string;
    this.authenticationService.SignUp(email , password).then(response=>{
      console.log("response =====>" , response);
      if(response && response.status){
        this.authService.storeUser({email:email, accessToken: response.data.user._delegate.accessToken});
        this.router.navigate(['listing'])
      }else{
        alert(response.message);
      }
    }).catch(err=>{
      console.log("error =====>" , err);

    })
  }

}
