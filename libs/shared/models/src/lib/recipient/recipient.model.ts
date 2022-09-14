import { BankModel } from '../bank';

export interface RecipientModel {
  name: string;
  rut: string;
  email: string;
  phone: string;
  bank: BankModel;
  accountType: string;
  accountNumber: string;
}
