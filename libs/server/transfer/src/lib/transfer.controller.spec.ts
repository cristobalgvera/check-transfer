import { Test } from '@nestjs/testing';
import { TransferController } from './transfer.controller';
import { TransferService } from './transfer.service';

describe('ServerTransferController', () => {
  let controller: TransferController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [TransferService],
      controllers: [TransferController],
    }).compile();

    controller = module.get(TransferController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
