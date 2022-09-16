import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateTransferModel, TransferModel } from '@check/shared/models';
import { RecipientService } from '@check/server/recipient';
import { catchError, from, map, Observable, switchMap } from 'rxjs';
import { GetTransferDto } from '@check/server/shared-dtos';
import { AuthService } from '@check/server/auth';
import { InjectModel } from '@nestjs/mongoose';
import { Transfer, TransferDocument } from './transfer.schema';
import { Model } from 'mongoose';

@Injectable()
export class TransferService {
  constructor(
    @InjectModel(Transfer.name)
    private readonly transferModel: Model<TransferDocument>,
    private readonly recipientService: RecipientService,
    private readonly authService: AuthService
  ) {}

  createTransfer(
    createTransferModel: CreateTransferModel
  ): Observable<Transfer> {
    return this.recipientService
      .getRecipient(createTransferModel.accountNumber)
      .pipe(
        map(
          (recipient): TransferModel => ({
            amount: createTransferModel.amount,
            origin: this.authService.getCurrentUser(),
            destination: {
              name: recipient.name,
              rut: recipient.rut,
              bank: recipient.bank,
              accountNumber: recipient.accountNumber,
              accountType: recipient.accountType,
            },
          })
        ),
        switchMap((transfer) => from(this.transferModel.create(transfer))),
        catchError((error) => {
          throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
        }),
        map((transfer) => ({ ...transfer.toObject() }))
      );
  }

  getTransfers(): Observable<GetTransferDto[]> {
    return from(
      this.transferModel
        .find(
          {
            origin: this.authService.getCurrentUser(),
          },
          {
            amount: 1,
            destination: 1,
          }
        )
        .populate('destination.accountType')
        .exec()
    );
  }
}
