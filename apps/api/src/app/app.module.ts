import { Module } from '@nestjs/common';
import { BankModule } from '@check/server/bank';
import { RecipientModule } from '@check/server/recipient';

@Module({
  imports: [BankModule, RecipientModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
