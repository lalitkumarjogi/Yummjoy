import { Component } from '@angular/core';
import { AuthenticationService } from './services/angularFireAuth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'yummjoyApp';

  constructor(private authenticationService:AuthenticationService){ }

  username:string = "lallit80599@gmail.comrt";
  password:string = "Lalit9896";

  // signUp data
  user = "test@gmail.com";
  pass = "test123"

  ngOnInit() { 
    

    // this.authenticationService.SignIn(this.user, this.pass).then(res=>{
    //   console.log("res ===>", res);    

    // }).catch(err=>{
    //   console.log("err ====>" , err)
    // })
   // this.authenticationService.SignUp(this.user, this.pass).then
  }


}
