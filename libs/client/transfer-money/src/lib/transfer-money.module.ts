import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransferMoneyRoutingModule } from './transfer-money-routing.module';
import { TransferMoneyComponent } from './transfer-money.component';
import { TransferMoneyFormComponent } from './transfer-money-form/transfer-money-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@check/client/material';

@NgModule({
  declarations: [TransferMoneyComponent, TransferMoneyFormComponent],
  imports: [
    CommonModule,
    TransferMoneyRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class TransferMoneyModule {}
