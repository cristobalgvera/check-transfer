import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

type HttpOptions = Parameters<HttpClient['get']>[1];

@Injectable()
export abstract class BaseHttpService {
  protected abstract readonly BASE_PATH: string;

  constructor(private readonly http: HttpClient) {}

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
