import { RecipientModel } from '../recipient';

export interface TransferModel {
  origin: string;
  destination: Pick<
    RecipientModel,
    'name' | 'rut' | 'bank' | 'accountType' | 'accountNumber'
  >;
  amount: number;
}
