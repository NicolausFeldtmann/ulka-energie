import { Component, OnInit } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent implements OnInit {

  ngOnInit(): void {
      setTimeout(() => {
        console.log('Animation läuft');
        this.introAnimation();
      }, 1500);
  }

  introAnimation() {
    let logo = document.querySelector('.intro-logo-space');
    logo?.classList.add('moveUp');
    this.getRid();
  }

  getRid() {
    setTimeout(() => {
        let intro = document.querySelector('.intro');
        intro?.classList.add('getRid');
    }, 4000);
  }

}
