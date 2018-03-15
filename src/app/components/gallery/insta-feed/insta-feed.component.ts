import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component(
{
  selector: 'app-insta-feed',
  templateUrl: './insta-feed.component.html',
  styleUrls: ['./insta-feed.component.css']
})
export class InstaFeedComponent implements OnInit 
{
  constructor() { }

  ngOnInit() 
  {
    $(document).ready(function() 
    {
      // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
      $('.modal').modal();
      $('#modal1').modal('open');
    });
  }
}
