import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component(
{
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: 
  [
    Title
  ],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit 
{

  constructor(private _pageTitle: Title) 
  {
    this._pageTitle.setTitle('Fun for Little Pixies | Pixie Paint Perth');
  }

  ngOnInit() { }

}
