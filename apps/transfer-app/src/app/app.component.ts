import { Component } from '@angular/core';
import { NavbarLink } from '@check/client/shared-ui';
import { EnvironmentService } from './core/services/environment/environment.service';

@Component({
  selector: 'transfer-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  protected appName = this.environmentService.getEnvironment().title;
  protected links: NavbarLink[] = [
    { path: '/transfer-money', title: 'Transfer', icon: 'currency_exchange' },
    { path: '/add-recipient', title: 'Add Recipient', icon: 'person_add' },
    { path: '/transfer-history', title: 'History', icon: 'payments' },
  ];

  constructor(private readonly environmentService: EnvironmentService) {}
}
