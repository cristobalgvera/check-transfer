import { Module } from '@nestjs/common';
import { BankModule } from '@check/server/bank';
import { RecipientModule } from '@check/server/recipient';
import { AccountTypeModule } from '@check/server/account-type';

@Module({
  imports: [BankModule, RecipientModule, AccountTypeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
