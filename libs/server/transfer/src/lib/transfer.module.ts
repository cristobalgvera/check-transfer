import { Module } from '@nestjs/common';
import { TransferController } from './transfer.controller';
import { TransferService } from './transfer.service';
import { RecipientModule, RecipientService } from '@check/server/recipient';
import { AuthModule } from '@check/server/auth';
import { MongooseModule } from '@nestjs/mongoose';
import { Transfer, TransferSchema } from './transfer.schema';

@Module({
  imports: [
    AuthModule,
    RecipientModule,
    MongooseModule.forFeature([
      {
        name: Transfer.name,
        schema: TransferSchema,
      },
    ]),
  ],
  controllers: [TransferController],
  providers: [TransferService, RecipientService],
  exports: [TransferService],
})
export class TransferModule {}
