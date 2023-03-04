import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <app-navbar></app-navbar>
  <router-outlet></router-outlet>
  <app-footer></app-footer>
  <app-loader></app-loader>
  
  `,
})
export class AppComponent {
  title = 'template';
}
