import { Injectable } from '@angular/core';
import { cards } from './shared/interfaces/cards.intefaces';

@Injectable({
  providedIn: 'root'
})
export class ViewBlogService {

  cards: cards[] = [
    {
      "date": "1st January, 2022",
      'title': "Card Title..",
    'description': "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa tempora blanditiis praesentium voluptatum, nihil impedit.",
    'details': "Read More"
    },
    {
      "date": "23rd February, 2022",
      'title': "Card Title..",
    'description': "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa tempora blanditiis praesentium voluptatum, nihil impedit.",
    'details': "Read More"
    },
    {
      "date": "3rd March, 2022",
      'title': "Card Title..",
    'description': "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa tempora blanditiis praesentium voluptatum, nihil impedit.",
    'details': "Read More"
    },
    {
      "date": "17th April, 2022",
      'title': "Card Title..",
    'description': "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa tempora blanditiis praesentium voluptatum, nihil impedit.",
    'details': "Read More"
    },
    {
      "date": "8th May, 2022",
      'title': "Card Title..",
    'description': "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa tempora blanditiis praesentium voluptatum, nihil impedit.",
    'details': "Read More"
    },
    {
      "date": "6th June, 2022",
      'title': "Card Title..",
    'description': "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa tempora blanditiis praesentium voluptatum, nihil impedit.",
    'details': "Read More"
    },
    {
      "date": "1st July, 2022",
      'title': "Card Title..",
    'description': "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa tempora blanditiis praesentium voluptatum, nihil impedit.",
    'details': "Read More"
    },
    {
      "date": "5th August, 2022",
      'title': "Card Title..",
    'description': "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa tempora blanditiis praesentium voluptatum, nihil impedit.",
    'details': "Read More"
    },
    {
      "date": "9 September, 2022",
      'title': "Card Title..",
    'description': "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa tempora blanditiis praesentium voluptatum, nihil impedit.",
    'details': "Read More"
    },
    {
      "date": "27 October, 2022",
      'title': "Card Title..",
    'description': "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa tempora blanditiis praesentium voluptatum, nihil impedit.",
    'details': "Read More"
    }

  ] 
  constructor() { }

    fetchcards(){
      return this.cards
    }
   
  }