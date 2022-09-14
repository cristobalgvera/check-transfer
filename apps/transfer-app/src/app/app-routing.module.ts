import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
