import { BankModel } from '../bank';

export interface RecipientModel {
  origin: string;
  name: string;
  rut: string;
  email: string;
  phone: string;
  bank: BankModel;
  accountType: string;
  accountNumber: string;
}
