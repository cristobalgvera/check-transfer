import { Controller, Get } from '@nestjs/common';
import { BankService } from './bank.service';
import { Observable } from 'rxjs';
import { GetBankDto } from './dto/get-bank.dto';

@Controller('banks')
export class BankController {
  constructor(private readonly bankService: BankService) {}

  @Get()
  getBanks(): Observable<GetBankDto[]> {
    return this.bankService.getBanks();
  }
}
