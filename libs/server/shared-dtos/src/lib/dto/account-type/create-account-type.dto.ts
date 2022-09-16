import { CreateAccountTypeModel } from '@check/shared/models';
import { IsNotEmpty } from 'class-validator';

export class CreateAccountTypeDto implements CreateAccountTypeModel {
  @IsNotEmpty()
  _id!: string;

  @IsNotEmpty()
  name!: string;
}
