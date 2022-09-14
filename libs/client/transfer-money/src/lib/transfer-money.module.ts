import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferMoneyRoutingModule } from './transfer-money-routing.module';
import { TransferMoneyComponent } from './transfer-money.component';

@NgModule({
  declarations: [TransferMoneyComponent],
  imports: [CommonModule, TransferMoneyRoutingModule],
})
export class TransferMoneyModule {}
