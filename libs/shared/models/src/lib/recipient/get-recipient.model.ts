import { RecipientModel } from './recipient.model';

export type GetRecipientModel = Pick<
  RecipientModel,
  'bank' | 'accountNumber' | 'accountType' | 'name' | 'rut' | 'email'
>;
