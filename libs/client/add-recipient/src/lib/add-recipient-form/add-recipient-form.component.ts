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
  ValidatorFn,
  Validators,
} from '@angular/forms';
import {
  BankModel,
  CreateRecipientModel,
  GetAccountTypeModel,
} from '@check/shared/models';

type AddRecipientFormGroup = FormGroup<
  {
    [key in keyof Omit<CreateRecipientModel, 'bank'>]: FormControl<
      CreateRecipientModel[key]
    >;
  } & {
    bankId: FormControl<CreateRecipientModel['bank']['id']>;
  }
>;

type AddRecipientFormControlName = keyof AddRecipientFormGroup['controls'];
type ValidationErrorName = keyof typeof Validators;

@Component({
  selector: 'app-add-recipient-form',
  templateUrl: './add-recipient-form.component.html',
  styleUrls: ['./add-recipient-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddRecipientFormComponent implements OnInit {
  @Input() banks: ReadonlyArray<BankModel> = [];
  @Input() accountTypes: ReadonlyArray<GetAccountTypeModel> = [];

  @Output() createRecipient = new EventEmitter<CreateRecipientModel>();

  protected addRecipientFormGroup!: AddRecipientFormGroup;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.addRecipientFormGroup = this.formBuilder.nonNullable.group({
      name: this.commonControl(''),
      rut: this.commonControl('', Validators.pattern(/^[0-9]{7,8}-[0-9kK]$/)),
      email: this.commonControl('', Validators.email),
      phone: this.commonControl('', Validators.pattern(/^\+?[0-9]{8,11}$/)),
      bankId: this.commonControl(''),
      accountType: this.commonControl(''),
      accountNumber: this.commonControl('', Validators.pattern(/^[0-9]+$/)),
    });
  }

  resetForm(): void {
    this.addRecipientFormGroup.reset();
  }

  protected handleSubmit(): void {
    if (this.addRecipientFormGroup.invalid)
      return this.addRecipientFormGroup.markAllAsTouched();

    const createRecipientModel = this.parseRecipientModel(
      this.addRecipientFormGroup.controls
    );

    this.createRecipient.emit(createRecipientModel);
  }

  private parseRecipientModel(
    recipientControls: AddRecipientFormGroup['controls']
  ): CreateRecipientModel {
    const bank = this.banks.find(
      (bank) => bank.id === recipientControls.bankId.value
    );

    if (!bank) throw new Error('Bank not found');

    return {
      name: recipientControls.name.value,
      rut: recipientControls.rut.value,
      email: recipientControls.email.value,
      phone: recipientControls.phone.value,
      accountType: recipientControls.accountType.value,
      accountNumber: recipientControls.accountNumber.value,
      bank: { ...bank },
    };
  }

  protected hasError(
    controlName: AddRecipientFormControlName,
    errorName: ValidationErrorName
  ): boolean {
    const control = this.addRecipientFormGroup.get(controlName);

    return control?.hasError(errorName) ?? false;
  }

  private commonControl<T>(
    initialValue: T,
    ...validators: ValidatorFn[]
  ): FormControl<T> {
    return this.formBuilder.nonNullable.control(initialValue, [
      Validators.required,
      ...validators,
    ]);
  }
}
