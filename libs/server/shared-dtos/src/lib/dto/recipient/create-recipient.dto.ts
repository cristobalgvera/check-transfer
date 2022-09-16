import { CreateRecipientModel } from '@check/shared/models';
import {
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  ValidateNested,
} from 'class-validator';
import { CreateBankDto } from '../bank/create-bank.dto';
import { Type } from 'class-transformer';
import { CreateAccountTypeDto } from '../account-type/create-account-type.dto';

export class CreateRecipientDto implements CreateRecipientModel {
  @IsNumberString()
  accountNumber!: string;

  @ValidateNested()
  @Type(() => CreateAccountTypeDto)
  accountType!: CreateAccountTypeDto;

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
