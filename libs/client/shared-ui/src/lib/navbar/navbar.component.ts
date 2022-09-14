import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NavbarLink } from '@check/client/shared-ui';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @Input() appName!: string;
  @Input() links!: NavbarLink[];
}
