import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToasttService {
  toasts:any = []
  constructor() { }

  show(toast:any){
    this.toasts.push(toast)
  }
}
