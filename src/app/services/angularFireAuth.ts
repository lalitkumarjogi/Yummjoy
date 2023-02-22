import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ResponseData } from '../modals/response';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private angularFireAuth: AngularFireAuth) { }

  /* Sign up */
  public SignUp(email: string, password: string): Promise<any> {
    const response: ResponseData = { status: false, message: '', data: {} };
    return this.angularFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        response.status = true;
        response.data = res;
        return response;
      })
      .catch((error) => {
        response.status = false;
        response.message = error.message;
        return response;
      });
  }

  /* Sign in */
  public SignIn(email: string, password: string): Promise<any> {
    const response: ResponseData = { status: false, message: '', data: {} };
    return this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        response.status = true;
        response.data = res;
        return response;
      })
      .catch((err) => {
        response.status = false;
        response.message = err.message;
        return response;
      });
  }

  /* Sign out */
  SignOut() {
    this.angularFireAuth.signOut();
  }
}
