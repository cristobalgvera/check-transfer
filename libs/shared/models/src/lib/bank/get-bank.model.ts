import { BankModel } from './bank.model';

export type GetBankModel = Pick<BankModel, 'id' | 'name'>;
