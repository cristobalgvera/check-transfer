import { Module } from '@nestjs/common';
import { AccountTypeService } from './account-type.service';
import { AccountTypeController } from './account-type.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountType, AccountTypeSchema } from './account-type.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AccountType.name, schema: AccountTypeSchema },
    ]),
  ],
  controllers: [AccountTypeController],
  providers: [AccountTypeService],
})
export class AccountTypeModule {}
