import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediumComponent } from './medium/medium.component';
import { ViewDetailsComponent } from './medium/view-details/view-details.component';
import { ProfileComponent } from './user/profile/profile.component';
import { InsertPostComponent } from './medium/insert-post/insert-post.component';
import { LoginComponent } from './user/login/login.component';
import { ResetPasswordComponent } from './user/reset-password/reset-password.component';
import { RegisterUserComponent } from './user/register/register.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { InvalidComponent } from './user/invalid/invalid.component';


const routes: Routes = [
  {path: 'medium', component:
MediumComponent},
// Here slug is nothing but a variable.
  {path: 'viewDetails/:slug', component: ViewDetailsComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'insert-post',component:InsertPostComponent},
  {path: 'teachers', component: InsertPostComponent},
  {path: 'registrationForm', component: RegisterUserComponent},
  {path: 'loginForm', component: LoginComponent},
  {path:'forgot',component:ForgotPasswordComponent},
  {path: 'resetPassword', component: ResetPasswordComponent},
  {path:'invalid',component:InvalidComponent},
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
