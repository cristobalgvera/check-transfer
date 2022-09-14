import {
  CreateTransferModel,
  CreateTransferModelAccountNumber,
} from '@check/shared/models';
import { IsNotEmpty, IsNumberString, IsPositive } from 'class-validator';

export class CreateTransferDto implements CreateTransferModel {
  @IsNumberString()
  accountNumber!: CreateTransferModelAccountNumber;

  @IsPositive()
  amount!: number;

  @IsNotEmpty()
  origin!: string;
}
