import { Component, OnInit } from '@angular/core';
import { faDashboard, faUserGraduate,faChalkboardTeacher, faRulerVertical, faBookReader, faSearch, faComment, faBell, faSignOut, faClose,} from '@fortawesome/free-solid-svg-icons';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  
  constructor(private cookieService:CookieService) { }

  // maintain track of whether sidenav is open or close
  sideNavCollapse:boolean=true
  navbarCollapse:boolean=false
  userData!:any

  ngOnInit(): void {
    this.userData=this.cookieService.getAll()
    console.log(this.userData)
  }
  
  icons ={
    dashboardIcon: faDashboard,
    userGraduateIcon: faUserGraduate,
    teacherIcon: faChalkboardTeacher,
    stdIcon: faRulerVertical,
    subIcon: faBookReader,
    searchIcon: faSearch,
    close: faClose,
    comment: faComment,
    bell: faBell,
    signout: faSignOut,
    

  }

  
}
