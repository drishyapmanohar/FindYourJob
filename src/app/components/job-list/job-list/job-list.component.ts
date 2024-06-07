import { Component, OnInit } from '@angular/core';
import { JobService } from '../../../services/job.service';
import { RouterModule } from '@angular/router';
import { NgFor, NgClass } from '@angular/common';

@Component({
  selector: 'app-job-list',
  standalone: true,
  imports: [NgFor, NgClass, RouterModule],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css'
})
export class JobListComponent implements OnInit{
  jobs: any[] = [];
  favorites: number[] = []; // Array to store favorite job IDs

  constructor(private JobService: JobService) {}

  ngOnInit(): void {
    this.JobService.getAllJobs().subscribe((data: any) => {
      this.jobs = data;
    });

     // Retrieve favorites from local storage on component initialization
     const storedFavorites = localStorage.getItem('favorites');
     if (storedFavorites) {
       this.favorites = JSON.parse(storedFavorites);
     }
  }
  toggleFavorite(jobId: number): void {
    const index = this.favorites.indexOf(jobId);
    if (index !== -1) {
      // Job is already in favorites, remove it
      this.favorites.splice(index, 1);
    } else {
      // Job is not in favorites, add it
      this.favorites.push(jobId);
    }
    // Save updated favorites to local storage
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
    
  }

  isFavorite(jobId: number): boolean {
    // Check if job is in favorites list
    return this.favorites.includes(jobId);
  }
}
