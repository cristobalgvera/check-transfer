import { Injectable, NotFoundException } from '@nestjs/common';
import {
  CreateRecipientModel,
  CreateTransferModelAccountNumber,
  GetRecipientModel,
  RecipientModel,
} from '@check/shared/models';
import { map, Observable, of } from 'rxjs';
import { GetRecipientDto } from '@check/server/shared-dtos';
import { AuthService } from '@check/server/auth';

@Injectable()
export class RecipientService {
  private static readonly recipients: RecipientModel[] = [];

  constructor(private readonly authService: AuthService) {}

  create(createRecipientModel: CreateRecipientModel): Observable<void> {
    const currentUser = this.authService.getCurrentUser();

    const recipient: RecipientModel = {
      ...createRecipientModel,
      origin: currentUser,
    };

    RecipientService.recipients.push(recipient);

    // TODO: Temporal solution, should be replaced with a real insertion
    return of(void 0);
  }

  findAll(): Observable<GetRecipientDto[]> {
    const currentUserRecipients = RecipientService.recipients.filter(
      (recipient) => recipient.origin === this.authService.getCurrentUser()
    );

    return of(currentUserRecipients).pipe(
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
      (recipient) =>
        recipient.accountNumber === accountNumber &&
        recipient.origin === this.authService.getCurrentUser()
    );

    if (!recipient) throw new NotFoundException('Recipient not found');

    return of(recipient);
  }
}
