import { Component } from '@angular/core';
import { IntroComponent } from './intro/intro.component';
import { AsideComponent } from "../shared/aside/aside.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    IntroComponent,
    AsideComponent
],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
