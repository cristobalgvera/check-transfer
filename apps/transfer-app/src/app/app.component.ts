import { Component } from '@angular/core';
import { EnvironmentService } from './services/environment/environment.service';
import { Link } from '@check/shared-ui';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  protected appName = this.environmentService.getEnvironment().title;
  protected links: Link[] = [
    { path: '/transfer', title: 'Transfer' },
    { path: '/add-recipient', title: 'Add Recipient' },
    { path: '/transfer-history', title: 'History' },
  ];

  constructor(private readonly environmentService: EnvironmentService) {}
}
