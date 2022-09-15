import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('@check/client/auth').then((m) => m.AuthModule),
  },
];

export const publicRoutes: Routes = routes;
