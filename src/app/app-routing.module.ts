import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './pages/form/form.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { UserListComponent } from './pages/user-list/user-list.component';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'listing', component:UserListComponent},
  {path:'form', component:FormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
