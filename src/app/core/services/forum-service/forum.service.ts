import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  private baseUrl = 'https://1qajdtdqj3.execute-api.us-west-2.amazonaws.com';

  constructor(private http: HttpClient) { }

  getSomeData(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getPostsData(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer code=3ab7ba9f-f998-4358-acb8-ba514a630e68'
    });
    return this.http.get(`${this.baseUrl}/posts/?code=3ab7ba9f-f998-4358-acb8-ba514a630e68`);
  }
}
