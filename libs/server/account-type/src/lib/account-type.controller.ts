import { Controller, Get } from '@nestjs/common';
import { AccountTypeService } from './account-type.service';
import { Observable } from 'rxjs';
import { GetAccountTypeDto } from '@check/server/shared-dtos';

@Controller('account-types')
export class AccountTypeController {
  constructor(private readonly accountTypeService: AccountTypeService) {}

  @Get()
  getAccountTypes(): Observable<GetAccountTypeDto[]> {
    return this.accountTypeService.getAccountTypes();
  }
}
