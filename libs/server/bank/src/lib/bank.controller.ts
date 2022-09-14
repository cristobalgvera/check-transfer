import { Controller, Get } from '@nestjs/common';
import { BankService } from './bank.service';
import { Bank } from '@check/shared/models';
import { Observable } from 'rxjs';

@Controller('banks')
export class BankController {
  constructor(private readonly bankService: BankService) {}

  @Get()
  getBanks(): Observable<Bank[]> {
    return this.bankService.getBanks();
  }

  @Get('account-types')
  getAccountTypes(): Observable<Bank[]> {
    return this.bankService.getAccountTypes();
  }
}
