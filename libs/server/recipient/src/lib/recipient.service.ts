import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import {
  CreateRecipientModel,
  CreateTransferModelAccountNumber,
  GetRecipientModel,
} from '@check/shared/models';
import { catchError, from, map, Observable } from 'rxjs';
import { GetRecipientDto } from '@check/server/shared-dtos';
import { AuthService } from '@check/server/auth';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Recipient, RecipientDocument } from './recipient.schema';

@Injectable()
export class RecipientService {
  constructor(
    @InjectModel(Recipient.name)
    private readonly recipientModel: Model<RecipientDocument>,
    private readonly authService: AuthService
  ) {}

  create(createRecipientModel: CreateRecipientModel): Observable<Recipient> {
    const currentUser = this.authService.getCurrentUser();

    return from(
      this.recipientModel.create({
        ...createRecipientModel,
        origin: currentUser,
      })
    ).pipe(
      catchError((error) => {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }),
      map((recipient) => ({
        ...recipient.toObject(),
      }))
    );
  }

  findAll(): Observable<GetRecipientDto[]> {
    return from(
      this.recipientModel
        .find({
          origin: this.authService.getCurrentUser(),
        })
        .exec()
    ).pipe(
      map((recipients) =>
        recipients.map((recipient) => ({
          bank: recipient.bank,
          accountNumber: recipient.accountNumber,
          accountType: recipient.accountType,
          name: recipient.name,
          rut: recipient.rut,
          email: recipient.email,
        }))
      )
    );
  }

  getRecipient(
    accountNumber: CreateTransferModelAccountNumber
  ): Observable<GetRecipientModel> {
    return from(
      this.recipientModel
        .findOne({
          origin: this.authService.getCurrentUser(),
          accountNumber,
        })
        .exec()
    ).pipe(
      map((recipient) => {
        if (!recipient) throw new Error('Recipient not found');

        return recipient;
      })
    );
  }
}
