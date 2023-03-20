import { Component, OnInit } from '@angular/core';
import { BlogData } from 'src/app/shared/interfaces/blog.interfaces';
import { cards } from 'src/app/shared/interfaces/cards.intefaces';
import { MediumService } from '../medium.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-medium-content',
  templateUrl: './medium-content.component.html',
  styleUrls: ['./medium-content.component.css']
})
export class MediumContentComponent implements OnInit {
  blogsData!: BlogData[];
  constructor(private mediumService: MediumService) { }

  

  sideNavCollapse = true;
  navbarCollapse = false;
  urls:any=[]
  ngOnInit(): void {
    // this.getcards();
    this.fetchBlogs();
  }
  // getcards(){
  //   this.cards = this.viewBlogService.fetchcards();
  // }
  // cards !: cards[]

  download(): any {
  
    this.blogsData.forEach((post:any)=>{
      const postID = post.PostID;
      this.mediumService.download(postID).subscribe(response => {

        const blob = new Blob([response]);
        const reader = new FileReader();
        reader.onload = (e:any) => this.urls[postID] = e.target.result;
        reader.readAsDataURL(blob)

      } )
    })


  }

  fetchBlogs():void{
    this.mediumService.fetchBlogs().subscribe((value:BlogData []) => {
      this.blogsData = value;
      this.download();
    });
  }

  
}
