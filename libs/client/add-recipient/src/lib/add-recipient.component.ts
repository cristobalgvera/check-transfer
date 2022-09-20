import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
import { SnackbarService } from '@check/client/material';
import { AddRecipientFormComponent } from './add-recipient-form/add-recipient-form.component';

@Component({
  selector: 'app-add-recipient',
  templateUrl: './add-recipient.component.html',
  styleUrls: ['./add-recipient.component.scss'],
})
export class AddRecipientComponent implements OnInit, OnDestroy {
  @ViewChild(AddRecipientFormComponent)
  private addRecipientForm!: AddRecipientFormComponent;

  private readonly destroy$ = new Subject<boolean>();
  protected banks$!: Observable<BankModel[]>;
  protected accountTypes$!: Observable<GetAccountTypeModel[]>;

  constructor(
    private readonly bankService: BankService,
    private readonly accountTypeService: AccountTypeService,
    private readonly recipientService: RecipientService,
    private readonly snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.banks$ = this.bankService.getBanks();
    this.accountTypes$ = this.accountTypeService.getAccountTypes();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  protected createRecipient(createRecipientModel: CreateRecipientModel) {
    this.recipientService
      .createRecipient(createRecipientModel)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.addRecipientForm.resetForm();
        this.snackbarService.open('Recipient created successfully');
      });
  }
}
