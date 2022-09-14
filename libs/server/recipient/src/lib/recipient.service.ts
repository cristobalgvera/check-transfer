import { Injectable } from '@nestjs/common';
import { CreateRecipientModel, RecipientModel } from '@check/shared/models';
import { map, Observable, of } from 'rxjs';
import { GetRecipientDto } from './dto/get-recipient.dto';

@Injectable()
export class RecipientService {
  private readonly recipients: RecipientModel[] = [];

  create(createRecipientModel: CreateRecipientModel): void {
    const recipient = { ...createRecipientModel };

    this.recipients.push(recipient);
  }

  findAll(): Observable<GetRecipientDto[]> {
    return of(this.recipients).pipe(
      map((recipients) =>
        recipients.map((recipient) => ({
          name: recipient.name,
          accountType: recipient.accountType,
          email: recipient.email,
          bank: recipient.bank,
        }))
      )
    );
  }
}
