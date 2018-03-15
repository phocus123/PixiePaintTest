export class FileUpload 
{
  key: string;
  name: string;
  url: string;
  captionTitle: string;
  captionBody: string;
  file: File;

  constructor(file: File) 
  {
    this.file = file;
  }
}
