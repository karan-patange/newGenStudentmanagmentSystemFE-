import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  private baseUrl = 'http://localhost:9292/enquiry';  // backend base URL

  constructor(private http: HttpClient) { }


  submitEnquiry(enquiry: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/newEnquiry`, enquiry);
  }


    // Method to submit new enquiry
  submitEnquiry2(enquiry: any): Observable<any> {
    return this.http.post(`http://localhost:9292/enquiry/newEnquiry`, enquiry);
  }




}
