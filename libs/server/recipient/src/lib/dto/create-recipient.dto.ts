import { CreateRecipientModel } from '@check/shared/models';
import { IsEmail, IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateRecipientDto implements CreateRecipientModel {
  @IsNumberString()
  accountNumber!: string;

  @IsNotEmpty()
  accountType!: string;

  @IsNotEmpty()
  bank!: string;

  @IsEmail()
  email!: string;

  @IsNotEmpty()
  name!: string;

  @IsNotEmpty()
  phone!: string;

  @IsNotEmpty()
  rut!: string;
}
