import { Component } from '@angular/core';
import { JobService } from '../../../services/job.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-favorite-jobs',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './favorite-jobs.component.html',
  styleUrl: './favorite-jobs.component.css'
})
export class FavoriteJobsComponent {
  favoriteJobs: any[] = [];

  constructor(private jobService: JobService) {}

  ngOnInit(): void {
      // Retrieve favorite job IDs from local storage
      const favoriteJobIds = JSON.parse(localStorage.getItem('favorites') || '[]');
      // Fetch all jobs
      this.jobService.getAllJobs().subscribe((jobs: any[]) =>  {
        // Filter jobs to get favorite jobs
        this.favoriteJobs = jobs.filter(job=>favoriteJobIds.includes(job.id));
      });
    }
  }
