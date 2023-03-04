import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  
  <router-outlet></router-outlet>
  <app-loader></app-loader>
  
  `,
})
export class AppComponent {
  title = 'template';
}
