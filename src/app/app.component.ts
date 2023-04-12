import { Component, HostListener, OnChanges, OnInit } from '@angular/core';
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
      style="position: fixed; bottom:0px; left:8px;" class="parent" *ngIf="this.httpService.tvvideo==true">
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
export class AppComponent implements OnInit,OnChanges {
  // tslint:disable-next-line: no-any
  title = 'template';
  safeURL: any;
  tvLink?: any;
  tvvideo:any;
  constructor(
    private _sanitizer: DomSanitizer,
    public httpService: HttpService
    ) {
      // this.getTv();
      
      
    }
    getTv() {
      this.httpService.getTv().subscribe(
        (data: any) => {
          this.tvLink = data.data.link;
          
          // this.httpService.tvvideo=false
          this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(
            this.tvLink?.concat('?autoplay=1&mute=1')
            );
          },
          (err: any) => {}
          );
        }
        ngOnChanges(){
          // this.tvvideo=this.httpService.tvvideo
          
        }
        checkwindow(width:any){
          if(width<=991){
            this.httpService.tvvideo=false
          }
          else{
            this.httpService.tvvideo=true;
          }
        }
       
        ngOnInit(): void{
          this.getTv();
          this. checkwindow(window.innerWidth)
        }
        @HostListener('window:resize', ['$event.target'])
        // tslint:disable-next-line: no-any
        onResize(target: any): void {
          this.checkwindow(window.innerWidth)
        }
      }
      