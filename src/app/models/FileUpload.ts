export class FileUpload {
  key: string;
  name: string;
  url: string;
  caption: string;
  file: File;

  constructor(file: File) {
    this.file = file;
  }
}
