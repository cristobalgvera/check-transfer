import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
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

  private handleError = (
    httpErrorResponse: HttpErrorResponse
  ): Observable<never> => {
    console.error(httpErrorResponse);

    if (httpErrorResponse.status >= 500)
      this.snackbarService.open('Oops! Something went wrong');
    else if (httpErrorResponse.status >= 400)
      this.snackbarService.open(httpErrorResponse.error.message);
    else this.snackbarService.open('Unknown httpErrorResponse');

    return throwError(() => httpErrorResponse);
  };

  protected get<T>(url: string, options?: HttpOptions): Observable<T> {
    return this.http.get<T>(url, options).pipe(catchError(this.handleError));
  }

  protected post<T>(
    url: string,
    body: unknown,
    options?: HttpOptions
  ): Observable<T> {
    return this.http
      .post<T>(url, body, options)
      .pipe(catchError(this.handleError));
  }

  protected put<T>(
    url: string,
    body: unknown,
    options?: HttpOptions
  ): Observable<T> {
    return this.http
      .put<T>(url, body, options)
      .pipe(catchError(this.handleError));
  }

  protected delete<T>(url: string, options?: HttpOptions): Observable<T> {
    return this.http.delete<T>(url, options).pipe(catchError(this.handleError));
  }
}
