import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JobService } from '../../../services/job.service';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-job-detail',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './job-detail.component.html',
  styleUrl: './job-detail.component.css'
})
export class JobDetailComponent {

  job: any; // Define job property to store job details

  constructor(private route: ActivatedRoute, private jobService: JobService) { }

  ngOnInit(): void {
    // Get jobId from route parameters
    const jobId = this.route.snapshot.params['jobId'];
    // Fetch job details from service
    this.jobService.getJobDetails(jobId).subscribe(
      (data) => {
        this.job = data;
        console.log(this.job)
      },
      (error) => {
        console.error('Error fetching job details:', error);
      }
    );
  }

}
