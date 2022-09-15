import { Injectable } from '@angular/core';
import { BankModel } from '@check/shared/models';
import { Observable, shareReplay } from 'rxjs';
import { BaseHttpService } from '../shared/base-http.service';

@Injectable({
  providedIn: 'root',
})
export class BankService extends BaseHttpService {
  protected readonly BASE_PATH = '/api/v1/banks';

  private banks$?: Observable<BankModel[]>;

  getBanks(): Observable<BankModel[]> {
    if (!this.banks$)
      this.banks$ = this.get<BankModel[]>(this.BASE_PATH).pipe(shareReplay(1));

    return this.banks$;
  }
}
