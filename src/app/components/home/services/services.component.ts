import { Component, OnInit, Input } from '@angular/core';
import { FileUpload } from '../../../models/FileUpload';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  // Declaring a local variable of type FileUpload array that is passed data from the home component.
  @Input() files: FileUpload[];

  constructor() {}

  ngOnInit() {}
}
