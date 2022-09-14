import { Injectable } from '@angular/core';
import { BaseHttpService } from '../shared/base-http.service';
import { CreateRecipientModel } from '@check/shared/models';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipientService extends BaseHttpService {
  protected readonly BASE_PATH = '/api/v1/recipients';

  createRecipient(
    createRecipientModel: CreateRecipientModel
  ): Observable<void> {
    return this.post<void>(this.BASE_PATH, createRecipientModel).pipe(
      catchError(this.handleError())
    );
  }
}
