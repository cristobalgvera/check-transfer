import {
  AccountTypeModel,
  BankModel,
  GetRecipientModel,
} from '@check/shared/models';

export class GetRecipientDto implements GetRecipientModel {
  email!: string;
  name!: string;
  accountNumber!: string;
  rut!: string;
  bank!: BankModel;
  accountType!: AccountTypeModel;
}
