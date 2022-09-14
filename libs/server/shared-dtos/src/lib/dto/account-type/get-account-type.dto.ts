import { GetAccountTypeModel } from '@check/shared/models';

export class GetAccountTypeDto implements GetAccountTypeModel {
  id!: string;
  name!: string;
}
