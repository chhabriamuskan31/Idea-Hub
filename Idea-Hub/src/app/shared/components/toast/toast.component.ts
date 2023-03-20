import { Component, OnInit } from '@angular/core';
import { ToasttService } from './toastt.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  constructor(public toasttService: ToasttService) { }

  ngOnInit(): void {
  }

}
