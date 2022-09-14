import { Component } from '@angular/core';
import { AccountTypeService, BankService } from '@check/client/shared-services';
import { Observable } from 'rxjs';
import { BankModel, GetAccountTypeModel } from '@check/shared/models';

@Component({
  selector: 'app-add-recipient',
  templateUrl: './add-recipient.component.html',
  styleUrls: ['./add-recipient.component.scss'],
})
export class AddRecipientComponent {
  protected banks$: Observable<BankModel[]>;
  protected accountTypes$: Observable<GetAccountTypeModel[]>;

  constructor(
    private readonly bankService: BankService,
    private readonly accountTypeService: AccountTypeService
  ) {
    this.banks$ = bankService.getBanks();
    this.accountTypes$ = accountTypeService.getAccountTypes();
  }
}
