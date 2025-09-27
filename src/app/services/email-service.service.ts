import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {




  private baseUrl = 'http://localhost:9292/studentRegistration';  // change port if different

  constructor(private http: HttpClient) {}

  sendEmailToGirls(subject: string, body: string): Observable<string> {
    let params = new HttpParams().set('subject', subject).set('body', body);
    return this.http.post(`${this.baseUrl}/sendEmailToGirls`, {}, { params, responseType: 'text' });
  }

  sendEmailToAll(subject: string, body: string): Observable<string> {
    let params = new HttpParams().set('subject', subject).set('body', body);
    return this.http.post(`${this.baseUrl}/sendEmailToAll`, {}, { params, responseType: 'text' });
  }

  sendEmailToFees90(subject: string, body: string): Observable<string> {
    let params = new HttpParams().set('subject', subject).set('body', body);
    return this.http.post(`${this.baseUrl}/sendEmailToFees90`, {}, { params, responseType: 'text' });
  }
}
