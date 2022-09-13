import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRecipientRoutingModule } from './add-recipient-routing.module';
import { AddRecipientComponent } from './add-recipient.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddRecipientComponent],
  imports: [CommonModule, AddRecipientRoutingModule, ReactiveFormsModule],
})
export class AddRecipientModule {}
