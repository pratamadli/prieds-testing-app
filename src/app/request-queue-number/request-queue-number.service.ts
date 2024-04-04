import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class QueueService {
  private apiUrl = environment.apiBaseUrl + '/queue'; // Assuming your backend API endpoint is /queue

  constructor(private http: HttpClient) {}

  printQueue(queueData: any): Observable<any> {
    console.log('QUEUE DATA PAYLOAD', queueData);
    return this.http.post<any>(this.apiUrl, queueData);
  }
}
