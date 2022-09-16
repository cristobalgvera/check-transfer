import { Module } from '@nestjs/common';
import { BankModule } from '@check/server/bank';
import { RecipientModule } from '@check/server/recipient';
import { AccountTypeModule } from '@check/server/account-type';
import { TransferModule } from '@check/server/transfer';
import { AuthModule } from '@check/server/auth';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from '../environments/environment';

@Module({
  imports: [
    BankModule,
    RecipientModule,
    AccountTypeModule,
    TransferModule,
    AuthModule,
    MongooseModule.forRoot(environment.db.uri),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
