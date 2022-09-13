import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipientComponent } from './add-recipient.component';

const routes: Routes = [{ path: '', component: AddRecipientComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddRecipientRoutingModule {}
