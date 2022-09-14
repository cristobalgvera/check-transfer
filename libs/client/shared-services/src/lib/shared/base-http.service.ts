import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { SnackbarService } from '@check/client/material';

type HttpOptions = Parameters<HttpClient['get']>[1];

@Injectable()
export abstract class BaseHttpService {
  protected abstract readonly BASE_PATH: string;

  constructor(
    private readonly http: HttpClient,
    private readonly snackbarService: SnackbarService
  ) {}

  protected handleError(): (error: unknown) => Observable<never> {
    return (error: unknown) => {
      console.error(error);

      if (error instanceof HttpErrorResponse) {
        if (error.status >= 500)
          this.snackbarService.open('Oops! Something went wrong');
        else if (error.status >= 400)
          this.snackbarService.open(
            'Error! Seems like you are missing something...'
          );
        else this.snackbarService.open('Unknown error');
      } else this.snackbarService.open('Unknown error');

      return EMPTY;
    };
  }

  protected get<T>(url: string, options?: HttpOptions): Observable<T> {
    return this.http.get<T>(url, options);
  }

  protected post<T>(
    url: string,
    body: unknown,
    options?: HttpOptions
  ): Observable<T> {
    return this.http.post<T>(url, body, options);
  }

  protected put<T>(
    url: string,
    body: unknown,
    options?: HttpOptions
  ): Observable<T> {
    return this.http.put<T>(url, body, options);
  }

  protected delete<T>(url: string, options?: HttpOptions): Observable<T> {
    return this.http.delete<T>(url, options);
  }
}
