import { RecipientModel } from '../recipient';

export type TransferModelDestination = Pick<
  RecipientModel,
  'name' | 'rut' | 'bank' | 'accountType' | 'accountNumber'
>;

export interface TransferModel {
  origin: string;
  destination: TransferModelDestination;
  amount: number;
}
