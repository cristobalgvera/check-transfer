import { Injectable } from '@angular/core';
import { BaseHttpService } from '../shared/base-http.service';
import { CreateRecipientModel, GetRecipientModel } from '@check/shared/models';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipientService extends BaseHttpService {
  protected readonly BASE_PATH = '/api/v1/recipients';

  createRecipient(
    createRecipientModel: CreateRecipientModel
  ): Observable<void> {
    return this.post<void>(this.BASE_PATH, createRecipientModel);
  }

  getRecipients(): Observable<ReadonlyArray<GetRecipientModel>> {
    return this.get<GetRecipientModel[]>(this.BASE_PATH).pipe(shareReplay(1));
  }
}
