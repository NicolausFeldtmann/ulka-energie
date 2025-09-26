import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { log } from 'console';
import { listenerCount } from 'process';
import { initZone } from 'zone.js/lib/zone-impl';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.scss'
})
export class IntroComponent implements OnInit {
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)) {
      this.introAnimation();
    } 
  }

  introAnimation() {
    setTimeout(() => {
      this.moveUp();
      this.addMargin();
      this.getRid();
    },1500);
  }

  moveUp() {
    let animatedLogo = document.querySelector('.animated-logo');
    animatedLogo?.classList.add('moveUp');
    this.clearBackgrnd();
  }

  clearBackgrnd() {
    let logoContainer = document.querySelector('.logo-container');
    setTimeout(() => {
      logoContainer?.classList.add('container-transperent');
    }, 2000);
  }

  addMargin() {
    let logo = document.querySelector('.solo-logo');
    logo?.classList.add('addMargin');
  }

  getRid() {
    let logoContainer = document.querySelector('.logo-container');
    setTimeout(() => {
      logoContainer?.classList.add('getRid');
    }, 3000);
  }

}
