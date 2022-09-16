import { GetAccountTypeModel } from '@check/shared/models';

export class GetAccountTypeDto implements GetAccountTypeModel {
  _id!: string;
  name!: string;
}
