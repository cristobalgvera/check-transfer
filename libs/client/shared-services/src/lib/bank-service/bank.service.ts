import { Injectable } from '@angular/core';
import { BankModel } from '@check/shared/models';
import { catchError, Observable, shareReplay } from 'rxjs';
import { BaseHttpService } from '../shared/base-http.service';

@Injectable({
  providedIn: 'root',
})
export class BankService extends BaseHttpService {
  protected readonly BASE_PATH = '/api/v1/banks';

  getBanks(): Observable<BankModel[]> {
    return this.get<BankModel[]>(this.BASE_PATH).pipe(
      catchError(this.handleError()),
      shareReplay(1)
    );
  }
}
