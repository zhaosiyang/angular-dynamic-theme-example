import {Component} from '@angular/core';
import {ThemeService} from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  primaryColor: string;
  secondaryColor: string;

  constructor(public themeService: ThemeService) {
    themeService.changeTheme('red', 'yellow');
  }
}
