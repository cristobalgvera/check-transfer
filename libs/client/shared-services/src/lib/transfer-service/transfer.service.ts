import { Injectable } from '@angular/core';
import { BaseHttpService } from '../shared/base-http.service';
import { CreateTransferModel } from '@check/shared/models';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransferService extends BaseHttpService {
  protected readonly BASE_PATH = '/api/v1/transfers';

  createTransfer(createTransferModel: CreateTransferModel): Observable<never> {
    return this.post<never>(this.BASE_PATH, createTransferModel);
  }

  getTransfers(): Observable<CreateTransferModel[]> {
    return this.get<CreateTransferModel[]>(this.BASE_PATH).pipe(shareReplay(1));
  }
}
