import {Component, OnInit, Input, AfterViewInit} from '@angular/core';
import { environment } from 'src/environments/environment';
// import { Banner } from './banner';

@Component({
  selector: 'app-side-ads',
  templateUrl: './side-ads.component.html',
  styleUrls: ['./side-ads.component.scss']
})
export class SideAdsComponent implements OnInit,AfterViewInit {

  @Input() banner!: any;
  showAd = environment.adsense.show;
      constructor() {    }
  
      ngAfterViewInit() {
          // setTimeout(() => {
          //     try {
          //         (window['adsbygoogle'] = window['adsbygoogle'] || []).push({
          //             overlays: {bottom: true}
          //         });
          //     } catch (e) {
          //         console.error(e);
          //     }
          // }, 0);
      }
  ngOnInit(): void {
    
  }
  
  }
