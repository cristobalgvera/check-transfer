import { CreateRecipientModel } from '@check/shared/models';
import {
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  ValidateNested,
} from 'class-validator';
import { CreateBankDto } from '../bank/create-bank.dto';
import { Type } from 'class-transformer';

export class CreateRecipientDto implements CreateRecipientModel {
  @IsNumberString()
  accountNumber!: string;

  @IsNotEmpty()
  accountType!: string;

  @ValidateNested()
  @Type(() => CreateBankDto)
  bank!: CreateBankDto;

  @IsEmail()
  email!: string;

  @IsNotEmpty()
  name!: string;

  @IsNotEmpty()
  phone!: string;

  @IsNotEmpty()
  rut!: string;
}
