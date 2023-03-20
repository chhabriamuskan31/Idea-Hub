import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medium-header',
  templateUrl: './medium-header.component.html',
  styleUrls: ['./medium-header.component.css']
})
export class MediumHeaderComponent implements OnInit {

  active=1;
  constructor() { }

  ngOnInit(): void {
  }

}
