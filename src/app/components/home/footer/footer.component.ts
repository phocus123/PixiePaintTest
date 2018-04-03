import { Component, OnInit } from '@angular/core';

// Declaring $ as type any for using jquery within typescript.
declare let $;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  // Declaring local variables.
  linkedIn_A: string = 'https://www.linkedin.com/in/ashleigh-clark-956240123/';
  linkedIn_M: string = 'https://www.linkedin.com/in/markschafers';

  constructor() {}

  ngOnInit() {}
}
