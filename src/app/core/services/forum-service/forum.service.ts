import { HttpClient } from '@angular/common/http';
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
}
