import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }
  validYN!:Number
  ngOnInit(): void {
    this.createForm();
  }
  forgotPasswordForm!:FormGroup

  createForm(){
    this.forgotPasswordForm=new FormGroup({
      Email:new FormControl('')
    })
  }
  submitForm(){
    console.log(this.forgotPasswordForm)
    const body={
      ...this.forgotPasswordForm.value
    }
    this.userService.validateEmail(body).subscribe((data)=>{
      this.validYN=data.validYN
      if(this.validYN==1){
        //toh hi send email
      }
      else{
        this.router.navigate(['/invalid'])
      }
    })
  }

}
