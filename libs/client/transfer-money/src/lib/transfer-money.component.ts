import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  RecipientService,
  TransferService,
} from '@check/client/shared-services';
import { CreateTransferModel, GetRecipientModel } from '@check/shared/models';
import { Observable, Subject, takeUntil } from 'rxjs';
import { TransferMoneyFormComponent } from './transfer-money-form/transfer-money-form.component';
import { SnackbarService } from '@check/client/material';

@Component({
  selector: 'app-transfer-money',
  templateUrl: './transfer-money.component.html',
  styleUrls: ['./transfer-money.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransferMoneyComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<boolean>();
  protected recipients$!: Observable<ReadonlyArray<GetRecipientModel>>;

  @ViewChild(TransferMoneyFormComponent)
  private transferMoneyFormComponent!: TransferMoneyFormComponent;

  constructor(
    private readonly recipientService: RecipientService,
    private readonly transferService: TransferService,
    private readonly snackbarService: SnackbarService
  ) {}

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.recipients$ = this.recipientService.getRecipients();
  }

  protected transferMoney(createTransferModel: CreateTransferModel): void {
    this.transferService
      .createTransfer(createTransferModel)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.snackbarService.open('Transfer created successfully');
        this.transferMoneyFormComponent.resetForm();
      });
  }
}
