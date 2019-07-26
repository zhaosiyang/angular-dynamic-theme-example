import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>angular-dynamic-theme-example</h1>

    <div class="block primary-background">Primary</div>  <br>
    <div class="block secondary-background">Secondary</div>  <br>

    Set Primary Color: <input type="text" [(ngModel)]="primaryColor"> <br>
    Set Secondary Color: <input type="text" [(ngModel)]="secondaryColor"> <br>

    <button (click)="changeTheme(primaryColor, secondaryColor)">Save</button>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  primaryColor: string;
  secondaryColor: string;

  constructor() {
    this.changeTheme('red', 'yellow'); // Set default theme
  }

  changeTheme(primary: string, secondary: string) {
    document.documentElement.style.setProperty('--primary-color', primary);
    document.documentElement.style.setProperty('--secondary-color', secondary);
  }
}
