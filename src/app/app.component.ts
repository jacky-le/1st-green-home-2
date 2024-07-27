import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, FooterComponent, SideBarComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Corrected property name
})
export class AppComponent {
  title = '1st-green-home-web-app';
}
