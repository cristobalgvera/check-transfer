import { Injectable } from '@angular/core';
import { LocalStorageService } from '@check/client/shared-services';
import { Observable, of } from 'rxjs';

const USERNAME_KEY = 'username';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly localStorageService: LocalStorageService) {}

  login(username: string): Observable<boolean> {
    this.localStorageService.setItem(USERNAME_KEY, username);

    return of(true);
  }

  isAuthenticated(): boolean {
    return !!this.localStorageService.getItem(USERNAME_KEY);
  }

  currentUser(): string | undefined {
    return this.localStorageService.getItem(USERNAME_KEY);
  }
}
