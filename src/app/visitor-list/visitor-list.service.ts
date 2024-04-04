// visitor-list.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Visitor,ApiResponse } from './visitor-list.model';

@Injectable({
  providedIn: 'root'
})
export class VisitorListService {
  private apiUrl = environment.apiBaseUrl + '/queue'; // Assuming your backend API endpoint is /queue

  constructor(private http: HttpClient) {}

  getVisitorList(): Observable<ApiResponse[]> {
    return this.http.get<ApiResponse[]>(this.apiUrl);
  }
}
