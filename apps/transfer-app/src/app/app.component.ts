import { Component } from '@angular/core';
import { NavbarLink } from '@check/client/shared-ui';
import { Environment } from '@check/client/core';

@Component({
  selector: 'transfer-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  protected readonly appName: string;
  protected readonly links: NavbarLink[] = [
    { path: '/transfer-money', title: 'Transfer', icon: 'currency_exchange' },
    { path: '/add-recipient', title: 'Add Recipient', icon: 'person_add' },
    { path: '/transfer-history', title: 'History', icon: 'payments' },
  ];

  constructor(private readonly environment: Environment) {
    this.appName = environment.title;
  }
}
