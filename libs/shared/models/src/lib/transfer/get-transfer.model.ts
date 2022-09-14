import { TransferModel } from './transfer.model';

export type GetTransferModel = Pick<TransferModel, 'destination' | 'amount'>;
