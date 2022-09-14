import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private readonly matSnackBar: MatSnackBar) {}

  open(message: string, action?: string, options?: MatSnackBarConfig): void {
    this.matSnackBar.open(message, action ?? 'Close', options);
  }

  close(): void {
    this.matSnackBar.dismiss();
  }
}
