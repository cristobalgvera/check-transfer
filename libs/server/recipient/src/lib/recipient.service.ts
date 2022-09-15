import { Injectable, NotFoundException } from '@nestjs/common';
import {
  CreateRecipientModel,
  CreateTransferModelAccountNumber,
  GetRecipientModel,
  RecipientModel,
} from '@check/shared/models';
import { map, Observable, of } from 'rxjs';
import { GetRecipientDto } from '@check/server/shared-dtos';

@Injectable()
export class RecipientService {
  private static readonly recipients: RecipientModel[] = [];

  create(createRecipientModel: CreateRecipientModel): Observable<void> {
    const recipient = { ...createRecipientModel };

    RecipientService.recipients.push(recipient);

    // TODO: Temporal solution, should be replaced with a real insertion
    return of(void 0);
  }

  findAll(): Observable<GetRecipientDto[]> {
    return of(RecipientService.recipients).pipe(
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
    const recipient = RecipientService.recipients.find(
      (recipient) => recipient.accountNumber === accountNumber
    );

    if (!recipient) throw new NotFoundException('Recipient not found');

    return of(recipient);
  }
}
