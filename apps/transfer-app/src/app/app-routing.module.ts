import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'add-recipient',
    loadChildren: () =>
      import('@check/add-recipient').then((m) => m.AddRecipientModule),
  },
  {
    path: 'transfer-money',
    loadChildren: () =>
      import('@check/transfer-money').then((m) => m.TransferMoneyModule),
  },
  {
    path: 'transfer-history',
    loadChildren: () =>
      import('@check/transfer-history').then((m) => m.TransferHistoryModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
