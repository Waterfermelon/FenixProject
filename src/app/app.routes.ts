import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./shared/layout/layout.component').then(m => m.LayoutComponent),
    children: [
      {
        path: '',
        loadComponent: () =>  import('./views/landing/landing.component').then(m => m.LandingComponent),
      },
      {
        path: 'about-us',
        loadComponent: () => import('./views/about-us/about-us.component').then(m => m.AboutUsComponent),
      },
      {
        path: 'faq',
        loadComponent: () => import('./views/faq/faq.component').then(m => m.FaqComponent)
      },
    ]
  },
  {
    path: 'login',
    loadComponent: () => import('./views/login/login.component').then(m => m.LoginComponent),
  }
];
