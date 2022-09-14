import { Controller, Get } from '@nestjs/common';
import { BankService } from './bank.service';
import { Observable } from 'rxjs';
import { GetBankDto } from '@check/server/shared-dtos';

@Controller('banks')
export class BankController {
  constructor(private readonly bankService: BankService) {}

  @Get()
  getBanks(): Observable<GetBankDto[]> {
    return this.bankService.getBanks();
  }
}
