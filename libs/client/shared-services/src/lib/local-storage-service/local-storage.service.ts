import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  getItem(key: string): string | undefined {
    const item = localStorage.getItem(key);

    return item ? JSON.parse(item) : undefined;
  }

  setItem(key: string, value: unknown): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clear(): void {
    localStorage.clear();
  }
}
