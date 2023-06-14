import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  isSidebar:BehaviorSubject<boolean> = new BehaviorSubject(false)
  constructor() { }

  toggleNav(toggle:boolean){
    this.isSidebar.next(toggle);
  }
}
