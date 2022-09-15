import { Test } from '@nestjs/testing';
import { TransferService } from './transfer.service';

describe('ServerTransferService', () => {
  let service: TransferService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [TransferService],
    }).compile();

    service = module.get(TransferService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
