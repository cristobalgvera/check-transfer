import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bank } from '@check/shared/models';
import { catchError, Observable, of, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BankService {
  constructor(private readonly httpClient: HttpClient) {}

  getBanks(): Observable<Bank[]> {
    return this.httpClient.get<Bank[]>('/api/v1/banks').pipe(
      catchError((error) => {
        console.error(error);
        return of([]);
      }),
      shareReplay(1)
    );
  }
}
