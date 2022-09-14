import { Controller, Get } from '@nestjs/common';
import { AccountTypeService } from './account-type.service';
import { GetAccountTypeDto } from './dto/get-account-type.dto';
import { Observable } from 'rxjs';

@Controller('account-types')
export class AccountTypeController {
  constructor(private readonly accountTypeService: AccountTypeService) {}

  @Get()
  getAccountTypes(): Observable<GetAccountTypeDto[]> {
    return this.accountTypeService.getAccountTypes();
  }
}
