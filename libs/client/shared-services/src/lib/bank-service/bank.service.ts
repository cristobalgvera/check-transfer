import { Injectable } from '@angular/core';
import { BankModel } from '@check/shared/models';
import { catchError, Observable, of, shareReplay } from 'rxjs';
import { BaseHttpService } from '../shared/base-http.service';

@Injectable({
  providedIn: 'root',
})
export class BankService extends BaseHttpService {
  protected readonly BASE_URL = '/api/v1/banks';

  getBanks(): Observable<BankModel[]> {
    return this.get<BankModel[]>(this.BASE_URL).pipe(
      catchError((error) => {
        console.error(error);
        return of([]);
      }),
      shareReplay(1)
    );
  }
}
