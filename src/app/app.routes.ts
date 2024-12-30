import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    title: 'Overlay Studio',
    loadComponent: () => import('./pages/layout/layout.component'),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
