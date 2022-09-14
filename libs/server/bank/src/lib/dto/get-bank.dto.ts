import { GetBankModel } from '@check/shared/models';

export class GetBankDto implements GetBankModel {
  id!: string;
  name!: string;
}
