import { RecipientModel } from './recipient.model';

export type CreateRecipientModel = Pick<
  RecipientModel,
  'name' | 'rut' | 'bank' | 'accountType' | 'accountNumber' | 'email' | 'phone'
>;
