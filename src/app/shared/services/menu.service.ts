import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

interface IMenu {
  isOpen: boolean;
  updated: Date;
}

const dafaultMenu: IMenu = { isOpen: false, updated: new Date() };

@Injectable({
  providedIn: "root"
})
export class MenuService {
  protected menuSource = new BehaviorSubject(dafaultMenu);
  menuCurrent = this.menuSource.asObservable();
  menu: IMenu;

  constructor() {}

  toggle(): void {
    this.menuSource.next({
      ...this.menu,
      isOpen: !this.menu.isOpen,
      updated: new Date()
    });
  }
}
