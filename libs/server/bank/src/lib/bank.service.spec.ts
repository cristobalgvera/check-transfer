import { Test } from '@nestjs/testing';
import { BankService } from './bank.service';

describe('ServerBankService', () => {
  let service: BankService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BankService],
    }).compile();

    service = module.get(BankService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
