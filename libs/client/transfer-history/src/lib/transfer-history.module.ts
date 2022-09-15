import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferHistoryComponent } from './transfer-history.component';
import { TransferHistoryRoutingModule } from './transfer-history-routing.module';
import { MaterialModule } from '@check/client/material';
import { TransferHistoryTableComponent } from './transfer-history-table/transfer-history-table.component';

@NgModule({
  declarations: [TransferHistoryComponent, TransferHistoryTableComponent],
  imports: [CommonModule, TransferHistoryRoutingModule, MaterialModule],
})
export class TransferHistoryModule {}
