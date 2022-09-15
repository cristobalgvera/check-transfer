import { Injectable } from '@nestjs/common';
import { CreateTransferModel, TransferModel } from '@check/shared/models';
import { RecipientService } from '@check/server/recipient';
import { map, Observable, of, tap } from 'rxjs';
import { GetTransferDto } from '@check/server/shared-dtos';

@Injectable()
export class TransferService {
  private readonly transfers: TransferModel[] = [];

  constructor(private readonly recipientService: RecipientService) {}

  createTransfer(createTransferModel: CreateTransferModel): Observable<void> {
    return this.recipientService
      .getRecipient(createTransferModel.accountNumber)
      .pipe(
        map(
          (recipient): TransferModel => ({
            amount: createTransferModel.amount,
            origin: createTransferModel.origin,
            destination: {
              name: recipient.name,
              rut: recipient.rut,
              bank: recipient.bank,
              accountNumber: recipient.accountNumber,
              accountType: recipient.accountType,
            },
          })
        ),
        tap((transfer) => this.transfers.push(transfer)),
        // TODO: Temporal solution, should be replaced with a real transfer
        map(() => void 0)
      );
  }

  getTransfers(): Observable<GetTransferDto[]> {
    return of(this.transfers).pipe(
      map((transfers) =>
        transfers.map((transfer) => ({
          amount: transfer.amount,
          destination: { ...transfer.destination },
        }))
      )
    );
  }
}
