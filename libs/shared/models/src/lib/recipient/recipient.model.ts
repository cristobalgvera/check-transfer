import { BankModel } from '../bank';
import { AccountTypeModel } from '../account-type';

export interface RecipientModel {
  origin: string;
  name: string;
  rut: string;
  email: string;
  phone: string;
  bank: BankModel;
  accountType: AccountTypeModel;
  accountNumber: string;
}
