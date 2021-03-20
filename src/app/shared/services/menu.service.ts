import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class MenuService {
  protected menuSource = new BehaviorSubject(false);
  menuCurrent = this.menuSource.asObservable();
  isOpen = false;

  constructor() {}

  toggle(): void {
    this.menuSource.next(!this.isOpen);
  }
}
