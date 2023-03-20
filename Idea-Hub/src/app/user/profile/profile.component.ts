import { Component, OnInit } from '@angular/core';
import { MediumService } from 'src/app/medium/medium.service';
import { UserService } from '../user.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  viewProfileData:any
  constructor(private mediumService: MediumService,private userService: UserService,private cookieService:CookieService,private router:Router) { }
  ngOnInit(): void {
    this.viewProfile();
  }

  viewProfile():void{
    this.mediumService.viewProfile(this.cookieService.get("UserID")).subscribe((data:any)=>{
      console.warn(data);
      this.viewProfileData = data[0]
    })
  }

}

