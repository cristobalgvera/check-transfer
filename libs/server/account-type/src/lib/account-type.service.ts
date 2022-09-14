import { Injectable } from '@nestjs/common';
import { GetAccountTypeDto } from './dto/get-account-type.dto';
import { Observable, of } from 'rxjs';

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
