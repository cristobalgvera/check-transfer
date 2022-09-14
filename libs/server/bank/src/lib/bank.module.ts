import { Module } from '@nestjs/common';
import { BankController } from './bank.controller';
import { BankService } from './bank.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule.register({ timeout: 5000 })],
  controllers: [BankController],
  providers: [BankService],
  exports: [BankService],
})
export class BankModule {}
