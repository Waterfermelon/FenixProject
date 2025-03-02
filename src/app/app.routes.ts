import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./views/landing/landing.component').then(m => m.LandingComponent),
  }
];
