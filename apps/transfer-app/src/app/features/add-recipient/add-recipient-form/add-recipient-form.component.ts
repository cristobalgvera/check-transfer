import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-add-recipient-form',
  templateUrl: './add-recipient-form.component.html',
  styleUrls: ['./add-recipient-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddRecipientFormComponent {}
