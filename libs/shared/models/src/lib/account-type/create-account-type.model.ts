import { AccountTypeModel } from './account-type.model';

export type CreateAccountTypeModel = Pick<AccountTypeModel, '_id' | 'name'>;
