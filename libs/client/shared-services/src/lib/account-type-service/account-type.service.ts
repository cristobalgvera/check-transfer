import { Injectable } from '@angular/core';
import { catchError, Observable, shareReplay } from 'rxjs';
import { GetAccountTypeModel } from '@check/shared/models';
import { BaseHttpService } from '../shared/base-http.service';

@Injectable({
  providedIn: 'root',
})
export class AccountTypeService extends BaseHttpService {
  protected readonly BASE_PATH = '/api/v1/account-types';

  getAccountTypes(): Observable<GetAccountTypeModel[]> {
    return this.get<GetAccountTypeModel[]>(this.BASE_PATH).pipe(
      catchError(this.handleError()),
      shareReplay(1)
    );
  }
}
