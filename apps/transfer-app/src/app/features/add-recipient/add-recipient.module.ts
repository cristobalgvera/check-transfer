import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddRecipientRoutingModule } from './add-recipient-routing.module';
import { AddRecipientComponent } from './add-recipient.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddRecipientFormComponent } from './add-recipient-form/add-recipient-form.component';

@NgModule({
  declarations: [AddRecipientComponent, AddRecipientFormComponent],
  imports: [CommonModule, AddRecipientRoutingModule, ReactiveFormsModule],
})
export class AddRecipientModule {}
