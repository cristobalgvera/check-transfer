import { RecipientModel } from './recipient.model';

export type GetRecipientModel = Pick<
  RecipientModel,
  'name' | 'accountType' | 'email' | 'bank'
>;
