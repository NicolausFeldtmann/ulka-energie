import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterLink } from "@angular/router";
import { log } from 'console';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)) {
      this.showLogo();
    }
  }

  showLogo() {
    let logo = document.querySelector('.soloLogo');
    setTimeout(() => {
      logo?.classList.add('showLogo');
    }, 3000);
  }

}
