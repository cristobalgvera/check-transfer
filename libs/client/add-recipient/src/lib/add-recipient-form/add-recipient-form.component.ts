import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { AddRecipient, Bank } from '@check/shared/models';
import { BankService } from '../services/bank/bank.service';

type AddRecipientForm = FormGroup<{
  [key in keyof AddRecipient]: FormControl<AddRecipient[key]>;
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
  protected addRecipientForm!: AddRecipientForm;
  protected banks$: Observable<Bank[]>;
  protected accountTypes$ = new BehaviorSubject([{ name: 'Cuenta Corriente' }]);

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly bankService: BankService
  ) {
    this.banks$ = this.bankService.getBanks();
  }

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

  protected addRecipient() {
    alert(JSON.stringify(this.addRecipientForm.value));
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
