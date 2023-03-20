import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  

  constructor(private route:ActivatedRoute, private userService: UserService,private router:Router) { }
  token!:String
  validYN!:Number
  ResetPasswordForm!:FormGroup

  ngOnInit(): void {
    this.route.queryParams.subscribe((value)=>{
      console.warn(value)
      this.token=value['token']
    })
    this.validateToken(this.token)
    this.createForm()
  }

  createForm(){
    this.ResetPasswordForm=new FormGroup({
      Password:new FormControl(),
      ConfirmPassword:new FormControl()
    })
  }

  validateToken(token:String){
    const body={
      "token":this.token
    }
    this.userService.validateToken(body).subscribe((data)=>{
      this.validYN=data.validYN
      if(this.validYN==1){
        //update password
      }
      else{
        this.router.navigate(['/invalid'])
      }
    })
  }

  submitForm(){
    console.log(this.ResetPasswordForm.value)
    const body={
      ...this.ResetPasswordForm.value,
      token:this.token
    }
    // console.log(this.ResetPasswordForm.value)
    this.userService.updatePassword(body).subscribe((data)=>console.log(data))
  }




}
