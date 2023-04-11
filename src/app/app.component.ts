import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpService } from './@core/services/http/http.service';
@Component({
  selector: 'app-root',
  template: `

    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
    <!-- <app-loader></app-loader> -->
    <div
      style="position: fixed; bottom:0px; left:8px;" class="parent">
      <a href="https://www.youtube.com/">
        <iframe
          [src]="safeURL"
          frameborder="0"
          width="200"
          height="140"
          allow="autoplay"
          allowfullscreen
          class="parent2"
        ></iframe>
      </a>
    </div>
  `,  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template';
  safeURL: any;
  tvLink: string = 'https://www.youtube.com/embed/Ky7KQopv39Y';
  constructor(
    private _sanitizer: DomSanitizer,
    private httpService: HttpService
  ) {
    this.getTv();
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(
      this.tvLink.concat('?autoplay=1&mute=1')
    );
  }
  getTv() {
    this.httpService.getTv().subscribe(
      (data: any) => {
        this.tvLink = data.data.link;
      },
      (err: any) => {}
    );
  }
}
