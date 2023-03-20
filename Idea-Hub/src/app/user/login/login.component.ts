import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup
  validUser!:Number
  constructor(private userService: UserService,private cookieService:CookieService,private router:Router) { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm(){
    this.loginForm=new FormGroup({
      Password:new FormControl('',[Validators.required]),
      UserName:new FormControl('',[Validators.required])
    })
  }

  submitForm(){
    this.loginUser()
    console.log("page isnt loading")
    console.log(this.loginForm.value)
  }
  loginUser(){
    const body={
      ...this.loginForm.value
    }
    this.userService.loginUser(body).subscribe((data:any)=>{
      
      this.validUser=data.valid
      if(this.validUser){
        this.cookieService.set("UserID",data.UserID),
        this.cookieService.set("UserName",data.UserName),
        this.cookieService.set("token",data.token),
        this.cookieService.set("fullName",data.fullName),
        this.router.navigate(['/medium']);
        console.log(this.cookieService.get("UserID"))
      }
      // else{
      //   this.cookieService.deleteAll()
      // }
      console.log(data)
    })
  }
}



