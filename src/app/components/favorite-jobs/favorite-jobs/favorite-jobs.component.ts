import { Component } from '@angular/core';
import { JobService } from '../../../services/job.service';
import { RouterModule } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { Job } from '../../../model/job.model';

@Component({
  selector: 'app-favorite-jobs',
  standalone: true,
  imports: [NgFor, NgIf, RouterModule],
  templateUrl: './favorite-jobs.component.html',
  styleUrl: './favorite-jobs.component.css'
})
export class FavoriteJobsComponent {
  favoriteJobs: Job[] = [];

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    // Retrieve favorite job IDs from local storage
    const favoriteJobIds = JSON.parse(localStorage.getItem('favorites') || '[]');
    // Fetch all jobs
    this.jobService.getAllJobs().subscribe((jobs: Job[]) => {
      // Filter jobs to get favorite jobs
      this.favoriteJobs = jobs.filter(job => favoriteJobIds.includes(job.id));
    });
  }
}
