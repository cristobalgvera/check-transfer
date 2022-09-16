import { AccountTypeModel } from './account-type.model';

export type GetAccountTypeModel = Pick<AccountTypeModel, '_id' | 'name'>;
