import { Component, OnInit, Input } from '@angular/core';
import { FileUpload } from '../../../models/FileUpload';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  // Declaring a local variable of type FileUpload array that is passed data from the home component.
  @Input() files: FileUpload[];

  constructor() {}

  ngOnInit() {}
}
