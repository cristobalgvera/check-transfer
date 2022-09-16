import {
  CreateTransferModel,
  CreateTransferModelAccountNumber,
} from '@check/shared/models';
import { IsNumberString, IsPositive } from 'class-validator';

export class CreateTransferDto implements CreateTransferModel {
  @IsNumberString()
  accountNumber!: CreateTransferModelAccountNumber;

  @IsPositive()
  amount!: number;
}
