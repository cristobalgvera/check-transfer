import { Module } from '@nestjs/common';
import { TransferController } from './transfer.controller';
import { TransferService } from './transfer.service';
import { RecipientService } from '@check/server/recipient';

@Module({
  controllers: [TransferController],
  providers: [TransferService, RecipientService],
  exports: [TransferService],
})
export class TransferModule {}
