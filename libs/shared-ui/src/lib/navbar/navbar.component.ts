import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Link } from './model/link.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  @Input() appName!: string;
  @Input() links!: Link[];
}
