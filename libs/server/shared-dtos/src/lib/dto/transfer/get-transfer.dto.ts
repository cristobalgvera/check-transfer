import {
  GetTransferModel,
  TransferModelDestination,
} from '@check/shared/models';

export class GetTransferDto implements GetTransferModel {
  amount!: number;
  destination!: TransferModelDestination;
}
