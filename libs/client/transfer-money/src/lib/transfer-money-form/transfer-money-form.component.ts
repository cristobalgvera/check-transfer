import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CreateTransferModel, GetRecipientModel } from '@check/shared/models';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { BehaviorSubject, map, Observable, startWith } from 'rxjs';

type TransferMoneyFormGroup = FormGroup<{
  [key in keyof Omit<CreateTransferModel, 'origin'>]: FormControl<
    CreateTransferModel[key]
  >;
}>;

type TransferMoneyFormControlName = keyof TransferMoneyFormGroup['controls'];
type ValidationErrorName = keyof typeof Validators;

@Component({
  selector: 'app-transfer-money-form',
  templateUrl: './transfer-money-form.component.html',
  styleUrls: ['./transfer-money-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransferMoneyFormComponent implements OnInit {
  @Input() recipients: ReadonlyArray<GetRecipientModel> = [];

  @Output() transferMoney = new EventEmitter<CreateTransferModel>();

  protected transferMoneyFormGroup!: TransferMoneyFormGroup;
  protected filteredRecipients$!: Observable<ReadonlyArray<GetRecipientModel>>;
  protected selectedRecipient$ = new BehaviorSubject<
    GetRecipientModel | undefined
  >(undefined);

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createFormGroup();
    this.createFilteredRecipients();
  }

  resetForm(): void {
    this.transferMoneyFormGroup.reset();
    this.selectedRecipient$.next(undefined);
  }

  protected handleSubmit(): void {
    if (this.transferMoneyFormGroup.invalid)
      return this.transferMoneyFormGroup.markAllAsTouched();

    const createTransferModel = this.parseCreateTransferModel();

    this.transferMoney.emit(createTransferModel);
  }

  protected hasError(
    controlName: TransferMoneyFormControlName,
    errorName: ValidationErrorName
  ): boolean {
    return this.transferMoneyFormGroup.controls[controlName].hasError(
      errorName
    );
  }

  protected handleRecipientChange(
    selected: MatAutocompleteSelectedEvent
  ): void {
    const accountNumber = selected.option.value as string;

    const selectedRecipient = this.recipients.find(
      (recipient) => recipient.accountNumber === accountNumber
    );

    this.selectedRecipient$.next(selectedRecipient);
  }

  private createFormGroup() {
    this.transferMoneyFormGroup = this.formBuilder.nonNullable.group({
      accountNumber: this.formBuilder.nonNullable.control(
        '',
        Validators.required
      ),
      amount: this.formBuilder.nonNullable.control(0, [
        Validators.required,
        Validators.min(1),
      ]),
    });
  }

  private createFilteredRecipients() {
    this.filteredRecipients$ =
      this.transferMoneyFormGroup.controls.accountNumber.valueChanges.pipe(
        startWith(''),
        map((value) => {
          const filterValue = value.toLocaleLowerCase();

          return this.recipients.filter(
            (recipient) =>
              recipient.accountNumber
                .toLocaleLowerCase()
                .includes(filterValue) ||
              recipient.name.toLocaleLowerCase().includes(filterValue)
          );
        })
      );
  }

  private parseCreateTransferModel(): CreateTransferModel {
    const { accountNumber, amount } = this.transferMoneyFormGroup.controls;

    return {
      amount: amount.value,
      accountNumber: accountNumber.value,
      // TODO: Use the logged in user's account number
      origin: 'test-account',
    };
  }
}
