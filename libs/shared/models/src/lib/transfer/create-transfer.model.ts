import { TransferModel } from './transfer.model';

export type CreateTransferModel = Pick<TransferModel, 'origin' | 'amount'> & {
  accountNumber: TransferModel['destination']['accountNumber'];
};
