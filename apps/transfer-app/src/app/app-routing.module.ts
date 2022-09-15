import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { protectedRoutes } from './core/routes/protected.route';
import { publicRoutes } from './core/routes/public.route';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'transfer-money',
    pathMatch: 'full',
  },
  ...publicRoutes,
  ...protectedRoutes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
