import { Test } from '@nestjs/testing';
import { BankController } from './bank.controller';
import { BankService } from './bank.service';

describe('ServerBankController', () => {
  let controller: BankController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BankService],
      controllers: [BankController],
    }).compile();

    controller = module.get(BankController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
