import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  template: `
  <app-navbar></app-navbar>
  <router-outlet></router-outlet>
  <app-footer></app-footer>
  <!-- <app-loader></app-loader> -->
  <div style="position: fixed; bottom:0px; left:8px;">
<a href="https://www.youtube.com/">
  <iframe [src]='safeURL' frameborder="0" width="200" height="140"  allow='autoplay' allowfullscreen></iframe>
</a></div>
  `,
})
export class AppComponent {
  title = 'template';
  safeURL:any;
  constructor(private _sanitizer: DomSanitizer){
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/Ky7KQopv39Y?autoplay=1&mute=1');
  }
  
}
