import { Component, OnDestroy, ViewChild } from '@angular/core';
import {
  AccountTypeService,
  BankService,
  RecipientService,
} from '@check/client/shared-services';
import { finalize, Observable, Subject, takeUntil } from 'rxjs';
import {
  BankModel,
  CreateRecipientModel,
  GetAccountTypeModel,
} from '@check/shared/models';
import { SnackbarService } from '@check/client/material';
import { AddRecipientFormComponent } from './add-recipient-form/add-recipient-form.component';

@Component({
  selector: 'app-add-recipient',
  templateUrl: './add-recipient.component.html',
  styleUrls: ['./add-recipient.component.scss'],
})
export class AddRecipientComponent implements OnDestroy {
  @ViewChild(AddRecipientFormComponent)
  private addRecipientForm!: AddRecipientFormComponent;

  private readonly destroy$ = new Subject<boolean>();
  protected readonly banks$: Observable<BankModel[]>;
  protected readonly accountTypes$: Observable<GetAccountTypeModel[]>;

  constructor(
    private readonly bankService: BankService,
    private readonly accountTypeService: AccountTypeService,
    private readonly recipientService: RecipientService,
    private readonly snackbarService: SnackbarService
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
      .pipe(
        finalize(() => {
          this.addRecipientForm.resetForm();
          this.snackbarService.open('Recipient created successfully');
        }),
        takeUntil(this.destroy$)
      )
      .subscribe();
  }
}
