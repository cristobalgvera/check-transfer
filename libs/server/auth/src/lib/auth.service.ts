import { Inject, Injectable } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

@Injectable()
export class AuthService {
  constructor(@Inject(REQUEST) private readonly request: Request) {}

  getCurrentUser(): string {
    return this.getAuthorizationHeader() ?? '';
  }

  isAuthenticated(): boolean {
    return !!this.getAuthorizationHeader();
  }

  private getAuthorizationHeader(): string | undefined {
    return this.request.headers.authorization;
  }
}
