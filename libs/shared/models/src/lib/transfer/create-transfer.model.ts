import { TransferModel } from './transfer.model';

export type CreateTransferModelAccountNumber =
  TransferModel['destination']['accountNumber'];

export type CreateTransferModel = Pick<TransferModel, 'origin' | 'amount'> & {
  accountNumber: CreateTransferModelAccountNumber;
};
