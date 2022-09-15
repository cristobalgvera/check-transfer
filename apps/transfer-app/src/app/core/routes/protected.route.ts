import { Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth/auth.guard';

const routes: Routes = [
  {
    path: 'add-recipient',
    loadChildren: () =>
      import('@check/client/add-recipient').then((m) => m.AddRecipientModule),
  },
  {
    path: 'transfer-money',
    loadChildren: () =>
      import('@check/client/transfer-money').then((m) => m.TransferMoneyModule),
  },
  {
    path: 'transfer-history',
    loadChildren: () =>
      import('@check/client/transfer-history').then(
        (m) => m.TransferHistoryModule
      ),
  },
];

export const protectedRoutes: Routes = routes.map((route) => ({
  ...route,
  canActivate: [AuthGuard],
  canLoad: [AuthGuard],
}));
