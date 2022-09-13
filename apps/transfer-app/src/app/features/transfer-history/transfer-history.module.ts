import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferHistoryRoutingModule } from './transfer-history-routing.module';
import { TransferHistoryComponent } from './transfer-history.component';

@NgModule({
  declarations: [TransferHistoryComponent],
  imports: [CommonModule, TransferHistoryRoutingModule],
})
export class TransferHistoryModule {}
