import { BankModel } from './bank.model';

export type CreateBankModel = Pick<BankModel, 'id' | 'name'>;
