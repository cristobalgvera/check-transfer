import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'add-recipient',
    loadChildren: () =>
      import('./features/add-recipient/add-recipient.module').then(
        (m) => m.AddRecipientModule
      ),
  },
  {
    path: 'transfer',
    loadChildren: () =>
      import('./features/transfer/transfer.module').then(
        (m) => m.TransferModule
      ),
  },
  {
    path: 'history',
    loadChildren: () =>
      import('./features/history/history.module').then((m) => m.HistoryModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
