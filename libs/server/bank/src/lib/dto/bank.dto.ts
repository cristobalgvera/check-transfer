import { BankModel } from '@check/shared/models';

export class BankDto implements BankModel {
  id!: string;
  name!: string;
}
