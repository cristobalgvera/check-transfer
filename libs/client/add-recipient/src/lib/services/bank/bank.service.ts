import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AccountType, Bank } from '@check/shared/models';
import { catchError, Observable, of, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BankService {
  private readonly BASE_URL = '/api/v1/banks';

  constructor(private readonly httpClient: HttpClient) {}

  getBanks(): Observable<Bank[]> {
    return this.httpClient.get<Bank[]>(this.BASE_URL).pipe(
      catchError((error) => {
        console.error(error);
        return of([]);
      }),
      shareReplay(1)
    );
  }

  getAccountTypes(): Observable<AccountType[]> {
    return this.httpClient
      .get<AccountType[]>(`${this.BASE_URL}/account-types`)
      .pipe(
        catchError((error) => {
          console.error(error);
          return of([]);
        }),
        shareReplay(1)
      );
  }
}
