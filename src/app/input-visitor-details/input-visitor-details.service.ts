import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class VisitorService {
  private apiUrl = environment.apiBaseUrl + '/visitor'; // Assuming your backend API endpoint is /queue

  constructor(private http: HttpClient) {}

  registerVisitor(visitorData: any): Observable<any> {
    console.log('VISITOR DATA PAYLOAD', visitorData);
    return this.http.post<any>(this.apiUrl, visitorData);
  }
}
