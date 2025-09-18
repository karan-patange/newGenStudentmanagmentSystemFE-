import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentRegistrationService {

  private baseUrl = 'http://localhost:9292/studentRegistration';
constructor(private http: HttpClient) { }

  registerStudent(studentData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/newStudentRegistration`, studentData);
  }
}
