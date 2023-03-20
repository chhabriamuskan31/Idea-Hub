import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ToasttService } from 'src/app/shared/components/toast/toastt.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterUserComponent implements OnInit {
  registrationForm!:FormGroup
  tDate!:NgbDateStruct
  validUser!:Number
  
  constructor(private userService: UserService, private toasttService: ToasttService){ }

  ngOnInit(): void {
    this.createForm()

  }
  icons={
    date:faCalendar
  }
  createForm(){
    this.registrationForm=new FormGroup({
      FirstName:new FormControl('',[Validators.required]),
      LastName:new FormControl('',[Validators.required]),
      UserName:new FormControl('',[Validators.required]),
      Email:new FormControl('',[Validators.required]),
      Password:new FormControl('',[Validators.required]),
      cPassword:new FormControl('',[Validators.required]),
      Mobile:new FormControl('',[Validators.required]),
      Bio:new FormControl('',[Validators.required]),
      
    })
  }
  submitForm(){
    console.log(this.registrationForm.value)
    if(this.checkPassword()){
      //check if username is unique or not
      this.validateUser(this.registrationForm.value.UserName)
      
    }
    else{
      //password didn't match
      this.toasttService.show({text:'Invalid password',className:'bg-danger',delay:2000})
        this.registrationForm.reset()
    }
    
  }

  validateUser(UserName:String){
    this.userService.validateUser(UserName).subscribe((data)=>{
      this.validUser=data.existsYN
      console.log(this.validUser)
      if(this.validUser==0)
        {
          console.log("validUser")
          //insert ka logic
          const body=this.generateBody()
          this.registerUser(body)
        }
      else{
        this.toasttService.show({text:'User with this username already exists',className:'bg-danger',delay:2000})
        this.registrationForm.reset()
      }
    })
  }

  generateBody():any{
    const body={
      ...this.registrationForm.value
    }
    console.log(body)
    return body
  }

  registerUser(body:any){
    this.userService.registerUser(body).subscribe(()=>console.log("done"))
  }

  checkPassword(){
    return this.registrationForm.value.Password===this.registrationForm.value.cPassword
  }
}

