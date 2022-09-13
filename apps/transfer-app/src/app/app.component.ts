import { Component } from '@angular/core';
import { EnvironmentService } from './services/environment/environment.service';
import { Link } from '@check/shared-ui';

@Component({
  selector: 'check-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  protected appName = this.environmentService.getEnvironment().title;
  protected links: Link[] = [
    { path: '/add-recipient', title: 'Add Recipient' },
    { path: '/transfer', title: 'Transfer' },
    { path: '/history', title: 'History' },
  ];

  constructor(private readonly environmentService: EnvironmentService) {}
}
