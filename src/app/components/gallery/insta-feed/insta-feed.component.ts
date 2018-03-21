import { Component, OnInit } from '@angular/core';
import { InstagramService } from '../../../services/instagram.service';
import * as Instafeed from '../../../../../node_modules/instafeed.js';

@Component({
  selector: 'app-insta-feed',
  templateUrl: './insta-feed.component.html',
  styleUrls: ['./insta-feed.component.css']
})
export class InstaFeedComponent implements OnInit {
  dataArray: any;

  constructor(private insta: InstagramService) {}

  ngOnInit() {
    this.insta.getData().subscribe(data => {
      this.dataArray = data.data;
    });
    this.initFeed(this.insta.getAccessToken(), this.insta.getUserId());
  }

  private initFeed(paramToken, paramId) {
    function initFeed() {
      var feed = new Instafeed({
        accessToken: paramToken,
        get: 'user',
        userId: paramId,
      });

      feed.run();
    }
  }

  
}
