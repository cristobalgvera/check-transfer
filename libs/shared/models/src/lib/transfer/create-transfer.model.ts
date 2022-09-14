import { TransferModel } from './transfer.model';

export type CreateTransferModel = Pick<TransferModel, 'origin' | 'amount'> & {
  destination: TransferModel['destination']['accountNumber'];
};
