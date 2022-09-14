import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransferHistoryComponent } from './transfer-history.component';

const routes: Routes = [{ path: '', component: TransferHistoryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferHistoryRoutingModule {}
