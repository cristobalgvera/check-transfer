import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bank } from '@check/shared/models';
import { catchError, map, Observable, of, shareReplay } from 'rxjs';

type BankResponse = {
  banks: Bank[];
};

@Injectable({
  providedIn: 'root',
})
export class BankService {
  constructor(private readonly httpClient: HttpClient) {}

  getBanks(): Observable<Bank[]> {
    return this.httpClient
      .get<BankResponse>('https://bast.dev/api/banks.php')
      .pipe(
        catchError((error) => {
          console.error(error);
          return of(<BankResponse>{ banks: [] });
        }),
        map((response) => response.banks),
        shareReplay(1)
      );
  }
}
