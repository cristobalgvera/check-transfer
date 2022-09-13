import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'add-recipient',
    loadChildren: () =>
      import('./pages/add-recipient/add-recipient.module').then(
        (m) => m.AddRecipientModule
      ),
  },
  {
    path: 'transfer',
    loadChildren: () =>
      import('./pages/transfer/transfer.module').then((m) => m.TransferModule),
  },
  {
    path: 'history',
    loadChildren: () =>
      import('./pages/history/history.module').then((m) => m.HistoryModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
