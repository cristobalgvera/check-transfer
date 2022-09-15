import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  CanLoad,
  Router,
} from '@angular/router';
import { AuthService } from '@check/client/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad, CanActivateChild {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) {}

  canActivate(): boolean {
    return this.isLoggedInOrElseRedirectToLogin();
  }

  canLoad(): boolean {
    return this.canActivate();
  }

  canActivateChild(): boolean {
    return this.canActivate();
  }

  private isLoggedInOrElseRedirectToLogin(): boolean {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }

    return true;
  }
}
