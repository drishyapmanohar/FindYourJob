import { Routes } from '@angular/router';
import { JobListComponent } from './components/job-list/job-list/job-list.component';
import { FavoriteJobsComponent } from './components/favorite-jobs/favorite-jobs/favorite-jobs.component';
import { JobDetailComponent } from './components/job-detail/job-detail/job-detail.component';

export const routes: Routes = [
  { path: 'jobs', component: JobListComponent },
  { path: 'favorites', component: FavoriteJobsComponent },
  { path: 'jobs/:jobId', component: JobDetailComponent },
  { path: '', redirectTo: '/jobs', pathMatch: 'full' },
  { path: '**', redirectTo: '/jobs' }
];

