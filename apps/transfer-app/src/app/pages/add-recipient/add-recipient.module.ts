import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRecipientRoutingModule } from './add-recipient-routing.module';
import { AddRecipientComponent } from './add-recipient.component';

@NgModule({
  declarations: [AddRecipientComponent],
  imports: [CommonModule, AddRecipientRoutingModule],
})
export class AddRecipientModule {}
