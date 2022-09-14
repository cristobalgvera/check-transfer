import { HttpException, Injectable } from '@nestjs/common';
import { BankModel, GetAccountTypeModel } from '@check/shared/models';
import { HttpService } from '@nestjs/axios';
import { catchError, map, Observable, of } from 'rxjs';

type BankResponse = {
  banks: BankModel[];
};

@Injectable()
export class BankService {
  private readonly BANKS_URL = 'https://bast.dev/api/banks.php';

  constructor(private readonly httpService: HttpService) {}

  getBanks(): Observable<BankModel[]> {
    return this.httpService.get<BankResponse>(this.BANKS_URL).pipe(
      catchError((error) => {
        if (error.response)
          throw new HttpException(error.response.data, error.response.status);

        throw new HttpException(error.message, 500);
      }),
      map((response) => response.data.banks)
    );
  }

  getAccountTypes(): Observable<GetAccountTypeModel[]> {
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
