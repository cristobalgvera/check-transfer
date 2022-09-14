import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferHistoryComponent } from './transfer-history.component';
import { TransferHistoryRoutingModule } from './transfer-history-routing.module';

@NgModule({
  declarations: [TransferHistoryComponent],
  imports: [CommonModule, TransferHistoryRoutingModule],
})
export class TransferHistoryModule {}
