import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { filter } from 'rxjs';

type LoginFormGroup = FormGroup<{
  username: FormControl<string>;
}>;

type LoginFormGroupControl = keyof LoginFormGroup['controls'];
type ValidationErrorName = keyof typeof Validators;

// THIS IS A DUMMY COMPONENT TO ASSOCIATE CURRENT USER WITH TRANSACTIONS
@Component({
  selector: 'check-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  protected loginFormGroup!: LoginFormGroup;

  constructor(
    private readonly authService: AuthService,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.nonNullable.group({
      username: this.formBuilder.nonNullable.control('', Validators.required),
    });
  }

  protected login(): void {
    if (this.loginFormGroup.invalid)
      return this.loginFormGroup.markAllAsTouched();

    this.authService
      .login(this.loginFormGroup.controls.username.value)
      // TODO: Improve this error handling
      .pipe(filter((isAuthenticated) => isAuthenticated))
      .subscribe(() => this.router.navigate(['/']));
  }

  protected hasError(
    controlName: LoginFormGroupControl,
    errorName: ValidationErrorName
  ): boolean {
    return this.loginFormGroup.controls[controlName].hasError(errorName);
  }
}
