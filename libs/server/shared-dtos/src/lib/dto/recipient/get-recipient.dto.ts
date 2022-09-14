import { BankModel, GetRecipientModel } from '@check/shared/models';

export class GetRecipientDto implements GetRecipientModel {
  accountType!: string;
  email!: string;
  name!: string;
  accountNumber!: string;
  rut!: string;
  bank!: BankModel;
}
