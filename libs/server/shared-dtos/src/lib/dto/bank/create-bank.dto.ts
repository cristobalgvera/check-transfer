import { CreateBankModel } from '@check/shared/models';
import { IsNotEmpty } from 'class-validator';

export class CreateBankDto implements CreateBankModel {
  @IsNotEmpty()
  id!: string;

  @IsNotEmpty()
  name!: string;
}
