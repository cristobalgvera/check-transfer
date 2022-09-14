import { Component } from '@angular/core';
import { NavbarLink } from '@check/client/shared-ui';
import { EnvironmentService } from './services/environment/environment.service';

@Component({
  selector: 'transfer-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  protected appName = this.environmentService.getEnvironment().title;
  protected links: NavbarLink[] = [
    { path: '/transfer-money', title: 'Transfer' },
    { path: '/add-recipient', title: 'Add Recipient' },
    { path: '/transfer-history', title: 'History' },
  ];

  constructor(private readonly environmentService: EnvironmentService) {}
}
