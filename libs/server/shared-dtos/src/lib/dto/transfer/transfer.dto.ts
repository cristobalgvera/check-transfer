import { TransferModel, TransferModelDestination } from '@check/shared/models';

export class TransferDto implements TransferModel {
  amount!: number;
  origin!: string;
  destination!: TransferModelDestination;
}
