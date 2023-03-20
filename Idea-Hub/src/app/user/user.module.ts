import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterUserComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { InvalidComponent } from './invalid/invalid.component';


@NgModule({
  declarations: [
    ProfileComponent,
    RegisterUserComponent,
    LoginComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    InvalidComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class UserModule { }
