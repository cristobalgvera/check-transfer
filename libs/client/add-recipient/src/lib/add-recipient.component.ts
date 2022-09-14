import { Component, OnDestroy } from '@angular/core';
import {
  AccountTypeService,
  BankService,
  RecipientService,
} from '@check/client/shared-services';
import { Observable, Subject, takeUntil } from 'rxjs';
import {
  BankModel,
  CreateRecipientModel,
  GetAccountTypeModel,
} from '@check/shared/models';

@Component({
  selector: 'app-add-recipient',
  templateUrl: './add-recipient.component.html',
  styleUrls: ['./add-recipient.component.scss'],
})
export class AddRecipientComponent implements OnDestroy {
  private readonly destroy$ = new Subject<boolean>();
  protected readonly banks$: Observable<BankModel[]>;
  protected readonly accountTypes$: Observable<GetAccountTypeModel[]>;

  constructor(
    private readonly bankService: BankService,
    private readonly accountTypeService: AccountTypeService,
    private readonly recipientService: RecipientService
  ) {
    this.banks$ = bankService.getBanks();
    this.accountTypes$ = accountTypeService.getAccountTypes();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  protected createRecipient(createRecipientModel: CreateRecipientModel) {
    this.recipientService
      .createRecipient(createRecipientModel)
      .pipe(takeUntil(this.destroy$))
      .subscribe();
  }
}
