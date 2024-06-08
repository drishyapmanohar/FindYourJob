import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Job } from '../model/job.model'; 

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private apiUrl = environment.apiUrl; 

  constructor(private http: HttpClient) { }

  //All jobs API
  getAllJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.apiUrl}/jobs`);
  }

  //Job details API
  getJobDetails(jobId: number): Observable<Job> {
    return this.http.get<Job>(`${this.apiUrl}/jobs/${jobId}`);
  }
}
