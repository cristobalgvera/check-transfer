import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { GetAccountTypeModel } from '@check/shared/models';
import { BaseHttpService } from '../shared/base-http.service';

@Injectable({
  providedIn: 'root',
})
export class AccountTypeService extends BaseHttpService {
  protected readonly BASE_PATH = '/api/v1/account-types';

  private accountTypes$?: Observable<GetAccountTypeModel[]>;

  getAccountTypes(): Observable<GetAccountTypeModel[]> {
    if (!this.accountTypes$)
      this.accountTypes$ = this.get<GetAccountTypeModel[]>(this.BASE_PATH).pipe(
        shareReplay(1)
      );

    return this.accountTypes$;
  }
}
