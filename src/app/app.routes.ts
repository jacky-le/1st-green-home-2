import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'landing',
    loadComponent: () =>
      import('./pages/landing-page/landing-page.component').then(
        (m) => m.LandingPageComponent
      ),
  },
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
];
