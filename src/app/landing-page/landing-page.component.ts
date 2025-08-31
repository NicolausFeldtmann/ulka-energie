import { Component } from '@angular/core';
import { IntroComponent } from './intro/intro.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    IntroComponent
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
