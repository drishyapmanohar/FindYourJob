import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiUrl = environment.apiUrl; 

  constructor(private http: HttpClient) { }

  //All jobs API
  getAllJobs(): Observable<[]> {
    return this.http.get<[]>(`${this.apiUrl}/jobs`);
  }

  //Job details API
  getJobDetails(jobId: number): Observable<[]> {
    return this.http.get<[]>(`${this.apiUrl}/jobs/${jobId}`);
  }
}
