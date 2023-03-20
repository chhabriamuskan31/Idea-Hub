import { Component, OnInit } from '@angular/core';
import { faComment, faHeart } from '@fortawesome/free-solid-svg-icons';
import { cards } from '../shared/interfaces/cards.intefaces';
import { ViewBlogService } from '../view-blog.service';
import { MediumService } from './medium.service';

@Component({
  selector: 'app-medium',
  templateUrl: './medium.component.html',
  styleUrls: ['./medium.component.css']
})
export class MediumComponent implements OnInit {

  icons={
    likeIcon:faHeart,
    commentIcon: faComment
  }


  constructor(private mediumService : MediumService) { }

  

  ngOnInit(): void {
    this.mediumService.fetchBlogs().subscribe((value:any)=>{
      console.warn(value)

    });
  }
 

}
