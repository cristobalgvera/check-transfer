import { Injectable } from '@angular/core';
import { catchError, Observable, of, shareReplay } from 'rxjs';
import { GetAccountTypeModel } from '@check/shared/models';
import { BaseHttpService } from '../shared/base-http.service';

@Injectable({
  providedIn: 'root',
})
export class AccountTypeService extends BaseHttpService {
  protected readonly BASE_URL = '/api/v1/account-types';

  getAccountTypes(): Observable<GetAccountTypeModel[]> {
    return this.get<GetAccountTypeModel[]>(this.BASE_URL).pipe(
      catchError((error) => {
        console.error(error);
        return of([]);
      }),
      shareReplay(1)
    );
  }
}
