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

type AddRecipientForm = FormGroup<{
  [key in keyof CreateRecipientModel]: FormControl<CreateRecipientModel[key]>;
}>;

type AddRecipientFormControlName = keyof AddRecipientForm['controls'];
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

  protected addRecipientForm!: AddRecipientForm;

  constructor(private readonly formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.addRecipientForm = this.formBuilder.nonNullable.group({
      name: this.commonControl(''),
      rut: this.commonControl('', Validators.pattern(/^[0-9]{7,8}-[0-9kK]$/)),
      email: this.commonControl('', Validators.email),
      phone: this.commonControl('', Validators.pattern(/^\+?[0-9]{8,11}$/)),
      bank: this.commonControl(''),
      accountType: this.commonControl(''),
      accountNumber: this.commonControl('', Validators.pattern(/^[0-9]+$/)),
    });
  }

  protected handleSubmit(): void {
    if (this.addRecipientForm.invalid)
      return this.addRecipientForm.markAllAsTouched();

    const createRecipientModel = this.addRecipientForm
      .value as CreateRecipientModel;

    this.createRecipient.emit(createRecipientModel);
  }

  protected hasError(
    controlName: AddRecipientFormControlName,
    errorName: ValidationErrorName
  ): boolean {
    return this.addRecipientForm.get(controlName)?.hasError(errorName) ?? false;
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
