import { GetRecipientModel } from '@check/shared/models';

export class GetRecipientDto implements GetRecipientModel {
  accountType!: string;
  bank!: string;
  email!: string;
  name!: string;
}
