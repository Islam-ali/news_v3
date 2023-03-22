import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  template: `
  <app-navbar></app-navbar>
  <router-outlet></router-outlet>
  <app-footer></app-footer>
  <app-loader></app-loader>
  <div style="position: fixed; bottom:0px; left:  10px;">

  <iframe [src]='safeURL' frameborder="0" width="250" height="280" ></iframe>
</div>
  `,
})
export class AppComponent {
  title = 'template';
  safeURL:any;
  constructor(private _sanitizer: DomSanitizer){
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/ajs_FlDoAF0');
  }
}
