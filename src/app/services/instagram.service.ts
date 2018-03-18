import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

@Injectable()
export class InstagramService {
  instagramUrl = 'https://api.instagram.com/v1/users/193800954/media/recent/?count=99&access_token=193800954.d30613d.9d8c8abca0ac44a2b7acc814307353a5';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(this.instagramUrl);
  }
}
