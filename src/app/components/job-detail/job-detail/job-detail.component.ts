import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observer } from 'rxjs';
import { JobService } from '../../../services/job.service';
import { NgIf, NgFor } from '@angular/common';
import { Job } from '../../../model/job.model';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css'
})
export class JobDetailComponent {

  job!: Job; // Define job property to store job details

  constructor(private route: ActivatedRoute, private jobService: JobService) { }

  ngOnInit(): void {
    // Get jobId from route parameters
    const jobId = this.route.snapshot.params['jobId'];
    this.getJobDetails(jobId);
  }
  getJobDetails(jobId: number): void {
    const jobObserver: Observer<Job> = {
      next: data => this.job = data,
      error: err => console.error('Error: ', err),
      complete: () => console.log('Retrieval complete')

    };
    this.jobService.getJobDetails(jobId).subscribe(jobObserver);
  }
}
