import { Module } from '@nestjs/common';
import { TransferController } from './transfer.controller';
import { TransferService } from './transfer.service';
import { RecipientModule, RecipientService } from '@check/server/recipient';
import { AuthModule } from '@check/server/auth';

@Module({
  imports: [AuthModule, RecipientModule],
  controllers: [TransferController],
  providers: [TransferService, RecipientService],
  exports: [TransferService],
})
export class TransferModule {}
