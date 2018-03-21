import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';

@Injectable()
export class InstagramService {
  private instagramUrl = 'https://api.instagram.com/v1/users/4089301952/media/recent/?count=99&access_token=4089301952.d30613d.e0ca2a66ca9c47b1a00acb437e38d050';
  private accessToken = '4089301952.d30613d.e0ca2a66ca9c47b1a00acb437e38d050';
  private userId: '4089301952';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get(this.instagramUrl);
  }

  getUserId(): string {
    return this.userId;
  }

  getAccessToken(): string {
    return this.accessToken;
  }
}
