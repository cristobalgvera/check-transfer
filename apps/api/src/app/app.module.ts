import { Module } from '@nestjs/common';
import { BankModule } from '@check/server/bank';
import { RecipientModule } from '@check/server/recipient';
import { AccountTypeModule } from '@check/server/account-type';
import { TransferModule } from '@check/server/transfer';
import { AuthModule } from '@check/server/auth';

@Module({
  imports: [
    BankModule,
    RecipientModule,
    AccountTypeModule,
    TransferModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
