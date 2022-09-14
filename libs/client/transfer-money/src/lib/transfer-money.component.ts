import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransferMoneyComponent {}
