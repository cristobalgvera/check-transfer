import { Controller, Get } from '@nestjs/common';
import { BankService } from './bank.service';
import { Observable } from 'rxjs';
import { BankDto } from './dto/bank.dto';
import { GetAccountTypeDto } from './dto/get-account-type.dto';

@Controller('banks')
export class BankController {
  constructor(private readonly bankService: BankService) {}

  @Get()
  getBanks(): Observable<BankDto[]> {
    return this.bankService.getBanks();
  }

  @Get('account-types')
  getAccountTypes(): Observable<GetAccountTypeDto[]> {
    return this.bankService.getAccountTypes();
  }
}
