import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RecipientService } from '@check/client/shared-services';
import { GetRecipientModel } from '@check/shared/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransferMoneyComponent implements OnInit {
  protected recipients$!: Observable<ReadonlyArray<GetRecipientModel>>;

  constructor(private readonly recipientService: RecipientService) {}

  ngOnInit(): void {
    this.recipients$ = this.recipientService.getRecipients();
  }
}
