import { Injectable } from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { GetAccountTypeDto } from '@check/server/shared-dtos';

@Injectable()
export class AccountTypeService {
  getAccountTypes(): Observable<GetAccountTypeDto[]> {
    return of([
      {
        id: '1',
        name: 'Checking',
      },
      {
        id: '2',
        name: 'Savings',
      },
    ]);
  }
}
